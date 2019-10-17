room1 = game.createRoom("room", "거실1.png") // 방 생성
room2 = game.createRoom("room2", "플스방2.png") // 두번째 방 생성
room3 = game.createRoom("room3", "배경-4.png") // 세번째 방 생성
                       
//room1 
playSound("브롤스타즈 BGM - 메인화면.mp3")

room1.door1 = room.createObject("door","문-오른쪽-닫힘.png") // 문 생성
room1.door1.setWidth(136) // 크기 조절
room1.locateObject(room.door,1049,300) // 문 배치 
room1.door.lock() // door 상태를 locked로 변경

room2.door1 = room2.createObject("door1","문-왼쪽-닫힘.png")

room1.door1.onClick = function(){
  if(room.door.isClosed()){ room.door.open()}
  else if (room.door.isOpened()){ game.move(room2)}
  else if (room.door.isLocked()){ printMessage("앙 오늘 브롤 경쟁전 마지막 날이란 말양ㅠㅠㅠ")}
}


room1.keypad = room.createObject("keypad","숫자키-우.png") // 오브젝트 생성
room1.keypad.setWidth(50) // 크기 조절 
room1.locateObject(room.keypad,930,250) // 위치 변경 
room1.keypad.onClick = function(){ printMessage("오빠~ 허튼 생각하지말고 얌전히 집 잘보고 있어....^^")
                                  showKeypad("number","",function(){
                                    room1.door.unlock() // door의 잠금을 연다
                                    printMessage("엇! 문이 열려버렸닼ㅋㅋㅋ엌ㅋㅋ 바로 겜하러..ㅎㅎ")
                                  })
                                 }

room1.clock1 = room.createObject("clock1","시계.png")
room1.clock1.setWidth(100)
room1.locateObject(room.clock1,100,110)
room1.clock1.onClick=function(){printfMessage("음...아무런 단서도 찾아볼 수 없군.")}

room1.post1.onClick = function(){showImageViewer("








game.start(room) // 게임시작
printMessage("평화로운 주말....마눌님께서 외출한 사이 몰래 게임을 하고싶다ㅠㅠ") // 환영 메시지 출력
