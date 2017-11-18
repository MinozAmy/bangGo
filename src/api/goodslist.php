<?php

	include 'connect.php';
	
	//传入数据
	$pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
	$qty = isset($_REQUEST['qty']) ? $_REQUEST['qty'] : 12;
    $brand = isset($_GET['brand']) ? $_GET['brand'] : '';
    $name = isset($_GET['name']) ? $_GET['name'] : '';
    $discount = isset($_GET['discount']) ? $_GET['discount'] : '';
    $originprice = isset($_GET['originprice']) ? $_GET['originprice'] : '';
    $price = isset($_GET['price']) ? $_GET['price'] : '';
	$url = isset($_GET['url']) ? $_GET['url'] : '';
	$datetime = isset($_GET['datetime']) ? $_GET['datetime'] : '';
	
	//编写sql语句
	$sql = 'select * from goodslist';
	
	
    if($name){
        $sql .= ' where category="' . $name . '"';
    }if($url){
        $sql .= ' where category="' . $url. '"';
    }if($discount){
    	$sql = ' select * from goodslist order by discount '.$discount;
    }if($price){
    	$sql = 'select * from goodslist order by price '.$price;
    }if($datetime){
    	$sql = 'select * from goodslist order by datetime '.$datetime;
    }
	$sql .= ' limit '. $qty*($pageNo-1) . ',' . $qty;
	//获取查询结果集
	$result = $conn->query($sql);
	

	
	//$row = $result = $conn->query($sql);得到一个查询结果集
	// $row = $result->fetch_row();使用查询结果集，返回数组
	//使用查询结果集，返回数组
	$row = $result->fetch_all(MYSQLI_ASSOC);
	
	//释放查询结果集
	$result->close();
	
	// 把数组转换成json字符串
//	$res = json_encode($row,JSON_UNESCAPED_UNICODE);
	
	
	// 格式化数据
    $res = array(
    	'pageNo'=>$pageNo,
    	'qty'=>$qty,
    	'total'=>$conn->query('select count(*) from goodslist')->fetch_row()[0],
    	'data'=>$row,
    );
	
	//关闭数据库
	$conn->close();
	
	//把结果输到前台
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
