<?php
$email = 'rony_admin@laravel.com';
$password = 'admin';

$url = 'http://127.0.0.1:8000/api/books';
$headers = array(
    'Content-Type: application/json',
    'Accept: application/json'
);

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL,$url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER,1);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_USERPWD, "$email:$password");
$result = curl_exec($curl);
curl_close($curl);

print_r($result);
