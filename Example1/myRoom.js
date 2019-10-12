room1 = game.createRoom("room", "배경-1.png") // 방 생성
room2 = game.createRoom("room", "배경-5.png") // 두번째 방 생성
room3 = game.createRoom("room", "배경-4.png") // 세번째 방 생성
                       

room1.door1 = room.createObject("door","문-오른쪽-닫힘.png") // 문 생성
room1.door1.setWidth(136) // 크기 조절
room1.locateObject(room.door,1049,300) // 문 배치 
room1.door.lock() // door 상태를 locked로 변경

room2.door1 = room2.createObject("door1","문-왼쪽-닫힘.png")

room1.door1.onClick = function(){
  if(room.door.isClosed()){ room.door.open()}
  else if (room.door.isOpened()){ game.move(room2)}
  else if (room.door.isLocked()){ printMessage("문이 잠겨있네요. 어떻게 해야 할까요.")}
}

playSound("브롤스타즈 BGM - 메인화면.mp3")

room1.keypad = room.createObject("keypad","숫자키-우.png") // 오브젝트 생성
room1.keypad.setWidth(50) // 크기 조절 
room1.locateObject(room.keypad,930,250) // 위치 변경 
room1.keypad.onClick = function(){ printMessage("주어진 단서를 모아 비밀번호를 풀어보세요!")
                                  showKeypad("number","",function(){
                                    room1.door.unlock() // door의 잠금을 연다
                                    printMessage("엇! 비밀번호가 열렸습니다!")
                                  })
                                 }

room1.clock1 = room.createObject("clock","시계.png")
room1.clock1.setWidth(100)
room1.locateObject(room.clock1,100,110)
room1.clock1.onClick=function(){printfMessage("음...아무런 단서도 찾아볼 수 없군.")}









game.start(room) // 게임시작
printMessage("브롤스타즈 방탈출에 오신 것을 환영합니다! Let's~ Brawl!!") // 환영 메시지 출력
