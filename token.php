<?php

	$file = __DIR__.'/token.txt';

	$ch = curl_init(); 

    // set url 
    curl_setopt($ch, CURLOPT_URL, "https://api.ethplorer.io/getAddressInfo/0x3fD30f3E1fbF4F3Ea6BDf3E3bb11826266708869/?apiKey=freekey"); 

    //return the transfer as a string 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

    // $output contains the output string 
    $output = curl_exec($ch); 

    // close curl resource to free up system resources 
    curl_close($ch);

    $output = json_decode($output, True);

    print_r($output);

    $current = file_get_contents($file);

    $current2=$output['ETH']['balance']+324.45;

    echo $current2;

    if ($current2>$current) {file_put_contents($file, $current2);} 

?>