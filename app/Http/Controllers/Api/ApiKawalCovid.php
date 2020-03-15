<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiKawalCovid extends Controller
{
    //
    public function kawalCovid()
    {
        $url = 'https://kawalcovid19.harippe.id/api/summary';
        $header = array(
            'Accept: application/json',
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        //curl_setopt($ch, CURLOPT_POST, 1);
        $result = curl_exec($ch);
        return $result;
    }
    public function kawalCovidWorld()
    {
        $url = 'https://covid19.mathdro.id/api/confirmed';
        $header = array(
            'Accept: application/json',
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        //curl_setopt($ch, CURLOPT_POST, 1);
        $result = curl_exec($ch);
        return $result;

    }
    public function kawalCovidWorldCount()
    {
        $url = 'https://covid19.mathdro.id/api';
        $header = array(
            'Accept: application/json',
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
        //curl_setopt($ch, CURLOPT_POST, 1);
        $result = curl_exec($ch);
        return $result;

    }
}
