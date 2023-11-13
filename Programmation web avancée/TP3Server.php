<?php
try {
  header("Content-type: text/xml");
   # SQLite Database
  //Create (connect to) SQLite database in file
  $file_db = new PDO('sqlite:MyBase');
    // Set errormode to exceptions
    $file_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
    // Create table Client
    $file_db->exec("CREATE TABLE IF NOT EXISTS Client (
                    id INTEGER PRIMARY KEY, 
                    name TEXT, 
                    addr TEXT, 
                    age INTEGER)");
    // Array with some test data to insert to database 
    $Clients = array(
                  array('name' => 'Amine', 'addr' => 'Setif',
                        'age' => 25),
                  array('name' => 'Samir', 'addr' => 'Alger',
                        'age' => 20),
                  array('name' => 'ali',  'addr' => 'Jijel',
                        'age' => 26)
                );
  // Prepare INSERT statement
   $insert = "INSERT INTO Client (name, addr, age) 
                VALUES (:n, :a, :g)";
    $stmt = $file_db->prepare($insert);
      //Bind parameters to statement variables
      $stmt->bindParam(':n', $name);     $stmt->bindParam(':a', $addr);
      $stmt->bindParam(':g', $age); 
    foreach ($Clients as $m) {
      // Set values to bound variables
         $name = $m['name'];      $addr = $m['addr'];
        $age = $m['age'];       
      $stmt->execute();  // Execute statement
    }

$stmt = $file_db->query("SELECT * FROM Client");

$doc = new DOMDocument('1.0', 'utf-8');
$Clients = $doc->createElement("Clients");
    $doc->appendChild($Clients);

    
while ($V=$stmt->fetch(PDO::FETCH_ASSOC)) {
   $client= $doc->createElement("client");
   $client->setAttribute('id',$V['id'] );
   //******************************
    $name = $doc->createElement("name", $V['name']);
    $client->appendChild($name);
   //*********************************
    $addr = $doc->createElement("addr");
    $tex = $doc->createTextNode($V['addr']);
    $addr->appendChild($tex);
    $client->appendChild($addr);
    //---------------------------------
    $age = $doc->createElement("age",$V['age']);
    $client->appendChild($age);
    $Clients->appendChild($client);
  }
 echo $doc->saveXML();
}
catch(PDOException $e) {
    echo $e->getMessage(); 
}
?>


 