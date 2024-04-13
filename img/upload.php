<?php
if(isset($_FILES['image_uploads'])) {
    $uploadFolder = 'uploads/';
    $fileCount = count($_FILES['image_uploads']['name']);

    for($i = 0; $i < $fileCount; $i++) {
        $fileName = $_FILES['image_uploads']['name'][$i];
        $fileTmp = $_FILES['image_uploads']['tmp_name'][$i];
        $fileDestination = $uploadFolder . $fileName;

        if(move_uploaded_file($fileTmp, $fileDestination)) {
            echo "File $fileName uploaded successfully.";
        } else {
            echo "Error uploading file $fileName.";
        }
    }
}
?>