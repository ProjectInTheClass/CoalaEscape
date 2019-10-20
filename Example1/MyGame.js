room = game.createRoom("room", "배경-6.png") // 방 생성
room2 = game.createRoom("room2", "배경-5.png") // 두번째 방 생성
room3 = game.createRoom("room3", "거실1.png") // 세번째 방 생성
                       
//room1 
playSound("브롤스타즈 BGM - 메인화면.mp3")

room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("앙 오늘 브롤 경쟁전 마지막 날이란 말양ㅠㅠㅠ") // 메시지 출력
	}
}

//키패드 만들기 
room1.keypad = room1.createObject("keypad","숫자키-우.png") // 오브젝트 생성
room1.keypad.setWidth(50) // 크기 조절 
room1.locateObject(room1.keypad,930,250) // 위치 변경 
room1.keypad.onClick = function(){ printMessage("오빠~ 허튼 생각하지말고 얌전히 집 잘보고 있어....^^")
                                  showKeypad("number","6672",function(){
                                    room1.door1.unlock() // door의 잠금을 연다
                                    printMessage("엇! 문이 열려버렸닼ㅋㅋㅋ엌ㅋㅋ 바로 겜하러..ㅎㅎ")
                                  })
                                 }

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}



//시계 만들기 
room.clock = room.createObject("clock","시계.png")
room.clock.setWidth(100)
room.locateObject(room.clock,100,110)
room.clock.onClick=function(){printMessage("마눌님 전번 뒷자리는...!")}

//TV 만들기 
room.tv=room.createObject("TV","TV2-1.png") //오브젝트 생성 
room.tv.setWidth(100) // 크기 조절 
room.locateObject(room.tv,500,240) // 위치 설정 
room.tv.onClick=function(){showImageViewer("메인화면레온.png","...")} //이미지 생성

// 
room.cabinet = room.createObject("cabinet","캐비닛-왼쪽-닫힘.png")
room.cabinet.setWidth(200)
room.locateObject(room1.cabinet, 110, 300)
room.cabinet.move = true // 플래그 변수
room.cabinet.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Right" && room.cabinet.move){ // 오른쪽으로 드래그 했으면
		printMessage("내 브롤점수와 같다 -> 점수 맞추려고 패작 개많이했다-.-")
		room.cabinet.moveX(150) // 
		room.cabinet.moveY(-30) //
		room.cabinet.move = false // 이후에는 더 이상 움직이지 않도록 합니다.
	} else {
		printMessage("열리지 않는다.")
	}
}

room.chair = room.createObject("chair", "의자-1.png")
room.chair.setWidth(160)
room.locateObject(room.chair, 900, 500)

room.book = room.createObject("book", "책1-2.png")
room.book.setWidth(100)
room.locateObject(room.book, 900, 485)
room.book.onClick = function() {
	showImageViewer("종이.png", "책.txt"); // 이미지 출력
}

//
//
// room2
//
//

playSound("브롤스타즈 BGM - 전투 3.mp3")

room2.door1 = room2.createObject("door1","문-오른쪽-열림.png") //문 생성
room2.door1.setWidth(136)
room2.locateObject(room2.door1,1049,305)
room2.door1.open()
room2.door1.onClick = function(){game.move(room1)}

room2.door2 = room2.createObject("door2", "문3-좌-닫힘.png")
room2.door2.setWidth(136)
room2.locateObject(room2.door2, 170, 335)
room2.door2.lock()


room2.door2.onClick = function() { // door2를 클릭했을 때
	if(room2.door2.isClosed()){ // door2가 closed 상태이면
		room2.door2.open() // door2의 상태를 open으로 바꿈
	} else if (room2.door2.isOpened()){ // door2가 opened 상태이면
		game.move(room3)
	} else if (room2.door2.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}
//mac1세트 만들기
room2.table1 = room2.createObject("table1", "테이블-우.png") // 테이블 생성
room2.table1.setWidth(350)
room2.locateObject(room2.table1, 350, 400)

room2.mac1 = room2.createObject("mac1", "파란맥-우.png") // 맥 생성
room2.mac1.setWidth(150)
room2.locateObject(room2.mac1, 355, 230)

room2.mac1.onClick=function(){
	printMessage("레온으로 캐리를 해보자! 수리검으로 참교육해주지 쿠쿡...!")
	playYoutube("https://youtu.be/6V35bQTvfdo")}


//mac2 만들기
room2.table2 = room2.createObject("table2", "테이블-우.png") // 테이블 생성
room2.table2.setWidth(350)
room2.locateObject(room2.table2, 650, 400)

room2.mac2 = room2.createObject("mac2", "파란맥-우.png") // 맥 생성
room2.mac2.setWidth(150)
room2.locateObject(room2.mac2, 655, 230)
room2.mac2.hide()

//mac3 만들기
room.table = room.createObject("table", "테이블-우.png") // 테이블 생성
room.table.setWidth(350)
room.locateObject(room.table, 950, 400)

room2.mac3 = room.createObject("mac3", "파란맥-우.png") // 맥 생성
room2.mac3.setWidth(150)
room2.locateObject(room2.mac3, 955, 230)

//



room2.keypad1 = room2.createObject("keypad", "숫자키-좌.png") // 오브젝트 생성
room2.keypad1.setWidth(50) // 크기 조절
room2.locateObject(room2.keypad1, 200, 300) // 위치 변경

room2.keypad2.onClick = function() {
	printMessage("밖에 맘대로 나가지도 못하고 이건 너무한거 아니냐고ㅠ.ㅠ")
	printMessage("레온의 영상을 보고 레온의 머리 위에 있는 보석 개수들의 전체 곱을 쓰세요.") 
	showKeypad("number", "0088" , function(){
		room2.mac2.show() // mac2를 보이게 만든다. 
		
		printMessage("뭐야이거 초현실주의야 뭐야-.-.")
	 })
}

room2.keypad2 = room2.createObject("keypad", "숫자키-좌.png") // 오브젝트 생성
room2.keypad2.setWidth(50) // 크기 조절
room2.locateObject(room2.keypad2, 200, 400) // 위치 변경

room2.keypad2.onClick = function() {
	printMessage("비밀번호를 풀어보세요!! ")
	showKeypad("number", "3915" , function(){
		room2.door2.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}


room2.mac2.onClick = function(){
  playYoutube("https://www.youtube.com/watch?v=uCqwcvh957A")}
  

//비밀번호를 알려주는 종이쪼가리 만들기 
room2.post.onClick = function(){
	printMessage("아니 이것은 처남이 남긴 메세지?!")
	showImageViewer("paper.png","매형에게.txt")}
room2.post.setWidth(50)
room2.locateObject(room2.post,150,30) // 위치 변경

//
//
// room3 만들기 
//
//
playSound("브롤스타즈 BGM - 승리.mp3")
printMessage("아! 내가 오랜만에 주말에 게임 오지게 많이 했다!ㅎㅎ 어 근데 딱봐도 이상해보이는 저건 뭐지")

room3.box = room3.createObject("box","상자4-2-닫힘.png")
room3.locateObject(room3.box,200,200)
room3.box.onClick = function(){
	showImageViewer("마지막.jpg")
	printMessage("방금 니 처남 처단하고 오는 길이다 닌 뒤졌다^^")
	game.clear()
}

	







game.start(room1) // 게임시작
printMessage("평화로운 주말....마눌님께서 외출한 사이 몰래 게임을 하고싶다ㅠㅠ") // 환영 메시지 출력
