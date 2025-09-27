<?php

namespace App\Http\Controllers;


class LeaveController extends Controller {
    public function get_employees_all_for_current_date(){
        $sql_query = "SELECT * FROM `leave_details` a inner join emp_details b on a.empno = b.empno where a.to = '27-09-2025'";
        return response()->json([
        'status' => true,
        'message' => 'Employees on leave for current date',
        'data' => $data
        ]);
    }

    public function get_employees_all_for_current_date_by_depart($dept_id){
        $sql_query = "SELECT * FROM `leave_details` a inner join emp_details b on a.empno = b.empno 
        where a.to = '27-09-2025' and b.dept_id = $dept_id";
        return response()->json([
        'status' => true,
        'message' => 'Employees on leave for current date',
        'data' => $data
        ]);
    }

    public function get_employees_all_leave_by_leave_type_designation(){
       $sql_query = "select * from `leave_details` a inner join emp_details b on a.empno = b.empno group by b.desig_id , a.leave_type";
        return response()->json([
        'status' => true,
        'message' => 'Employees on leave by leave type and designation',
        'data' => $data
        ]);
    }
}
?>