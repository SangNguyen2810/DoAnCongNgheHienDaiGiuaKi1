<?php

class DbOperation
{
    private $con;

    function __construct()
    {
        require_once dirname(__FILE__) . '/DbConnect.php';
        $db = new DbConnect();
        $this->con = $db->connect();
    }

    

    //Method to get all the assignments of a particular student
    public function getFlights(){
        $stmt = $this->con->prepare("SELECT * FROM flight");
       
        $stmt->execute();
        $assignments = $stmt->get_result();
        $stmt->close();
        return $assignments;
    }

       public function showFlights($id,$id1,$id2){
        $select = "SELECT * FROM flight WHERE NoiDi=? AND NoiDen=? AND Ngay=?";
       if($stmt = $this->con->prepare($select)){
        $stmt->bind_param("sss", $id,$id1,$id2);
        $stmt->execute();
        $assignments = $stmt->get_result();
        $stmt->close();
        return $assignments;
    };
}
     public function getFlightsSBF($id){
        $select = "SELECT * FROM flight WHERE NoiDi=?";
        if($stmt = $this->con->prepare($select)){
        $stmt->bind_param("s", $id);
        $stmt->execute();
        $assignments = $stmt->get_result();
        $stmt->close();
        return $assignments;
    };
    }

    //Method to get student details
 

    
    //Method to generate a unique api key every time
    private function generateApiKey(){
        return md5(uniqid(rand(), true));
    }
}