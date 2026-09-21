Add-Type -AssemblyName System.Drawing

function Resize-Image([string]$filePath, [int]$targetWidth, [int]$targetHeight) {
    $srcImage = [System.Drawing.Image]::FromFile($filePath)
    $destBitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($destBitmap)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

    $graphics.DrawImage($srcImage, 0, 0, $targetWidth, $targetHeight)
    $graphics.Dispose()
    $srcImage.Dispose()

    $tempPath = "$filePath.tmp.png"
    $destBitmap.Save($tempPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $destBitmap.Dispose()

    Move-Item -Path $tempPath -Destination $filePath -Force
    Write-Host "Resized $filePath to $targetWidth x $targetHeight"
}

$handbag = (Resolve-Path "public/model/model-handbag.png").Path
$shoes = (Resolve-Path "public/model/model-shoes.png").Path

Resize-Image $handbag 1536 1024
Resize-Image $shoes 1536 1024
