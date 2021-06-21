<?php


class rendezVous extends Controller
{
    public function __construct()
    {
        $this->rendezV = $this->model("rendezVousM");
    }

    

    public function readAll()
    {
        $data = json_decode(file_get_contents("php://input"));

        // die(var_dump($data));
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if ($this->rendezV->readAll($data))
                echo json_encode($this->rendezV->readAll($data));
        }
    }
    public function read_single()
    {
        $data = json_decode(file_get_contents("php://input"));
        // die(var_dump($data));
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            if ($this->rendezV->read_single($data))
                echo json_encode($this->rendezV->read_single($data));
        }
    }
    public function insert()
    {

        $data = json_decode(file_get_contents("php://input"));

        if ($this->rendezV->checkTime($data) == 0) {
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                if ($this->rendezV->insert($data)) {
                    echo json_encode(['Success' => 'the appointment has reserved sucussefly']);
                }
            }
        } else {
            echo json_encode("exist");
        }
    }

    public function delete()
    {
        $data = json_decode(file_get_contents("php://input"));
        if ($_SERVER['REQUEST_METHOD'] == "DELETE") {
            if ($this->rendezV->delete($data)) {
                echo json_encode(['Success' => 'appointment deleted']);
            }
        }
    }


    public function update()
    {
        $data = json_decode(file_get_contents("php://input"));
        if ($this->rendezV->checkTime($data) == 0) {
            if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
                if ($this->rendezV->update($data)) {
                    echo json_encode(['Success' => 'data has updated']);
                }
            }
        } else {
            echo json_encode("exist");
        }
    }
}
