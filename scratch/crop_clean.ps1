Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\rohit\.gemini\antigravity\brain\c24508cf-c55c-4b64-9277-744b432daec5\.user_uploaded\media_1789992892653.jpg"
$srcImg = [System.Drawing.Image]::FromFile($srcPath)
$w = $srcImg.Width
$h = $srcImg.Height
Write-Host "Source image dimensions: $w x $h"

# 3 columns, 2 rows
$colW = $w / 3.0
$rowH = $h / 2.0

Write-Host "Each cell approx: $colW x $rowH"

# We crop each cell cleanly within its outer border
function Crop-Cell($col, $row, $outPath) {
    # Trim the outer border slightly (e.g. 1.5% each side)
    $borderPadX = [int]($colW * 0.015)
    $borderPadY = [int]($rowH * 0.015)

    $x = [int]($col * $colW + $borderPadX)
    $y = [int]($row * $rowH + $borderPadY)
    $cw = [int]($colW - (2 * $borderPadX))
    $ch = [int]($rowH - (2 * $borderPadY))

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
    Write-Host "Saved complete cell to $outPath ($cw x $ch)"
}

$assetsDir = (Resolve-Path "src/assets").Path
$publicModelDir = (Resolve-Path "public/model").Path

# Row 0
Crop-Cell 0 0 "$assetsDir/vague-watch.png"
Crop-Cell 1 0 "$assetsDir/vague-necklace.png"
Crop-Cell 2 0 "$assetsDir/vague-sunglasses.png"

# Row 1
Crop-Cell 0 1 "$assetsDir/vague-handbag.png"
Crop-Cell 1 1 "$assetsDir/vague-shoes.png"
Crop-Cell 2 1 "$assetsDir/vague-earrings.png"

# Copy to public/model/ for TryOnStudio
Copy-Item "$assetsDir/vague-watch.png" "$publicModelDir/watch.png" -Force
Copy-Item "$assetsDir/vague-necklace.png" "$publicModelDir/necklace.png" -Force
Copy-Item "$assetsDir/vague-sunglasses.png" "$publicModelDir/sunglasses.png" -Force
Copy-Item "$assetsDir/vague-handbag.png" "$publicModelDir/handbag.png" -Force
Copy-Item "$assetsDir/vague-shoes.png" "$publicModelDir/shoes.png" -Force

$srcImg.Dispose()
