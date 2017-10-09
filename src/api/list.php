<?php
	include 'connect.php';
	
	$pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 10;
    $brand = isset($_GET['brand']) ? $_GET['brand'] : '';
    $name = isset($_GET['name']) ? $_GET['name'] : '';
    $discout = isset($_GET['discout']) ? $_GET['discout'] : '';
    $price = isset($_GET['price']) ? $_GET['price'] : '';
    $salePrice = isset($_GET['salePrice']) ? $_GET['salePrice'] : '';
    $bigPic = isset($_GET['bigPic']) ? $_GET['bigPic'] : '';
	$smallPic = isset($_GET['smallPrice']) ? $_GET['smallPrice'] : '';

	$sql = 'select * from goods';

	if($cate){
		$sql .= ' where category="' . $cate . '"';
	}
    if($name){
        $sql .= ' where category="' . $name . '"';
    }if($bigPic){
        $sql .= ' where category="' . $bigPic. '"';
    }

	$sql .= ' limit '. $qty*($pageNo-1) . ',' . $qty;

	// 获取查询结果
	$result = $conn->query($sql);

	// 使用查询结果集
	$row = $result->fetch_all(MYSQLI_ASSOC);
	
	//释放查询结果集
    $result->close();

    // 格式化数据
    $res = array(
    	'pageNo'=>$pageNo,
    	'qty'=>$qty,
    	'total'=>$conn->query('select count(*) from goods')->fetch_row()[0],
    	'data'=>$row,
    );

    //把结果输出到前台
    echo json_encode($res,JSON_UNESCAPED_UNICODE);


	// 释放查询内存(销毁)
	//$result->free();

	//关闭连接
	$conn->close();
?>