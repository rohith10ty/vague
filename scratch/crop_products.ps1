Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\rohit\.gemini\antigravity\brain\c24508cf-c55c-4b64-9277-744b432daec5\.user_uploaded\media_1789992143522.jpg"
$srcImg = [System.Drawing.Image]::FromFile($srcPath)
$w = $srcImg.Width
$h = $srcImg.Height
Write-Host "Source image dimensions: $w x $h"

# 3 columns, 2 rows
$colW = $w / 3.0
$rowH = $h / 2.0

Write-Host "Each cell approx: $colW x $rowH"

# We want only the product, excluding top header text ("VAGUE. COLLECTION 01/2026") and bottom text ("01 WATCH TIME HAS NO LABEL.")
# In each cell of rowH:
# Top header is top ~16% of cell
# Bottom footer is bottom ~18% of cell
# Product is in middle ~16% to ~82% vertically, and ~8% to ~92% horizontally

function Crop-Cell($col, $row, $outPath, $cropTopPercent, $cropBottomPercent, $cropLeftPercent, $cropRightPercent) {
    $cellX = $col * $colW
    $cellY = $row * $rowH
    
    $x = [int]($cellX + ($colW * $cropLeftPercent))
    $y = [int]($cellY + ($rowH * $cropTopPercent))
    $cw = [int]($colW * (1.0 - $cropLeftPercent - $cropRightPercent))
    $ch = [int]($rowH * (1.0 - $cropTopPercent - $cropBottomPercent))

    $targetRect = New-Object System.Drawing.Rectangle(0, 0, $cw, $ch)
    $srcRect = New-Object System.Drawing.Rectangle($x, $y, $cw, $ch)

    $destBitmap = New-Object System.Drawing.Bitmap($cw, $ch)
    $graphics = [System.Drawing.Graphics]::FromImage($destBitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $graphics.DrawImage($srcImg, $targetRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    $graphics.Dispose()

    $destBitmap.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $destBitmap.Dispose()
    Write-Host "Saved clean product image to $outPath ($cw x $ch)"
}

# Ensure output directory exists
$assetsDir = (Resolve-Path "src/assets").Path
$publicModelDir = (Resolve-Path "public/model").Path

# Row 0
# Col 0: Watch (top crop ~14%, bottom crop ~16%, left ~4%, right ~4%)
Crop-Cell 0 0 "$assetsDir/vague-watch.png" 0.13 0.16 0.05 0.05
# Col 1: Necklace (top crop ~0%, bottom crop ~16%, left ~10%, right ~10% since chain goes to top)
Crop-Cell 1 0 "$assetsDir/vague-necklace.png" 0.02 0.16 0.08 0.08
# Col 2: Sunglasses (top crop ~14%, bottom crop ~16%, left ~4%, right ~4%)
Crop-Cell 2 0 "$assetsDir/vague-sunglasses.png" 0.13 0.16 0.04 0.04

# Row 1
# Col 0: Handbag (top crop ~14%, bottom crop ~16%, left ~4%, right ~4%)
Crop-Cell 0 1 "$assetsDir/vague-handbag.png" 0.13 0.16 0.04 0.04
# Col 1: Shoes (top crop ~14%, bottom crop ~16%, left ~6%, right ~6%)
Crop-Cell 1 1 "$assetsDir/vague-shoes.png" 0.13 0.16 0.06 0.06
# Col 2: Earrings (top crop ~14%, bottom crop ~16%, left ~6%, right ~6%)
Crop-Cell 2 1 "$assetsDir/vague-earrings.png" 0.13 0.16 0.06 0.06

# Also update the 4 model product images in public/model/
Copy-Item "$assetsDir/vague-watch.png" "$publicModelDir/watch.png" -Force
Copy-Item "$assetsDir/vague-necklace.png" "$publicModelDir/necklace.png" -Force
Copy-Item "$assetsDir/vague-sunglasses.png" "$publicModelDir/sunglasses.png" -Force
Copy-Item "$assetsDir/vague-handbag.png" "$publicModelDir/handbag.png" -Force
Copy-Item "$assetsDir/vague-shoes.png" "$publicModelDir/shoes.png" -Force

$srcImg.Dispose()
