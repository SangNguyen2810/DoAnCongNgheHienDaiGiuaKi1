<?php

//including the required files
require_once '../include/DbOperation.php';
require '../libs/Slim/Slim.php';
header('Access-Control-Allow-Origin: *');

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();





/* *
 * URL: http://localhost/StudentApp/v1/assignments/<student_id>
 * Parameters: none
 * Authorization: Put API Key in Request Header
 * Method: GET
 * */

$app->get('/allflights', function() use ($app){
    $db = new DbOperation();
    $result = $db->getFlights();
    $response = array();
    $response['error'] = false;
    $response['assignments'] = array();
    while($row = $result->fetch_assoc()){
        $temp = array();
        $temp['NoiDi']=$row['NoiDi'];
    
        array_push($response['assignments'],$temp);
    }
    echoResponse(200,$response);
});



function echoResponse($status_code, $response)
{
    $app = \Slim\Slim::getInstance();
    $app->status($status_code);
    $app->contentType('application/json');
    echo json_encode($response);
}




$app->run();