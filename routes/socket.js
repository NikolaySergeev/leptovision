/*
 * Serve content over a socket
 */

module.exports = function (io) {

    //var users = [];
	var rooms = [];

    var getUserById = function (id) {
		for (var j = 0; j < rooms.length; j++) {
			for (var i = 0; i < rooms[j].user_array.length; i++) {
				if (rooms[j].user_array[i].id === id)
					return rooms[j].user_array[i];
			}
		}
        return undefined;
    };
    
    var getUserIndexById = function(id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === id)
                return i;
        }
        return -1;
    };


    io.sockets.on('connection', function (socket) {
        //var user = getUserById(socket.id);

		if(socket.user === undefined || socket.room === undefined)
			socket.broadcast.to(socket.id).emit("giveuser");
		//  Слушатель события disconnect пользователя.
		socket.on('disconnect', function(){
			//  Code:
			//	Удаляет пользователя из сокета.
			//	Ищет пользователей в комнате и удаляет их из массива пользователей комнаты.
			//	Если комната пуста - комнату удалить.
			//
			socket.leave(socket.room);
			var user_idx = -1;
			
			//Проверить если комната пользователя пуста. Идет причина: перезапуск сервера. 
			if(rooms[socket.room] != undefined){
				for(var i=0;i<rooms[socket.room].user_array.length;i++){
					
					if(rooms[socket.room].user_array[i][0] === socket.user){
						//Поиск пользователей в массиве пользователей. O(длина)
						user_idx = i;
						break;
					}
					
				}
				//Удалить пользователя из массива пользователей.
				rooms[socket.room].user_array.splice(user_idx,1);
				if(rooms[socket.room].user_array.length === 0){
					delete rooms[socket.room];
				}
				//Обновить список пользователей онлайн для других пользователей.
				io.sockets.in(socket.room).emit('userConnect', urooms[socket.room].user_array);
				console.log(socket.user+" disconnected.");
			}
			else 
				console.log("Probable Server Restart. Disconnecting user to reconnect. user: %s room: %s",socket.user,socket.room);
		});
		
		socket.on('addToRoom', function (msg){
			/*  Code:
				Добавление пользователя в комнату.
				Add custom property .user .room to socket for later identification.
				Search if room exists. Add user.
			*/
			socket.room = msg.room;
			socket.user = msg.user;
			var flag = 0; //NOTE: No race conditions observed now
			for( var key in rooms ) {
				if( key === socket.room ){
					flag=1;
					break;
				}
			}
			if(flag === 0){
				rooms[socket.room] = {
					name:socket.room,
					user_array:[]
				}
				rooms[socket.room].user_array.push([socket.user,socket.id]);
			} else{
				rooms[socket.room].user_array.push([socket.user,socket.id]);
			}
			
			//Добавить сокет в предоставленную комнату
			socket.join(socket.room);
			//Послать сообщение user_connect msg остальным пользователям в комнате.
			io.sockets.in(socket.room).emit('userConnect', rooms[socket.room].user_array);
			//Отправить текущему пользователю его серверный socket.id для использования в качестве идентификатора peerjs. Это обеспечивает уникальность на пользовательском сервере.
			socket.broadcast.to(socket.id).emit('socket_id',socket.id);
			console.log(socket.user+" connected.");
		});
		
		if(rooms != undefined){
			for (var j = 0; j < rooms.length; j++) {
				io.sockets.in(rooms[j]).emit('userConnect', rooms[j].user_array);
			}
		}

        socket.on('object:modifying', function (value) {
            //send object:modifying to everyone except the sender
			socket.broadcast.to(socket.room).emit('object:modifying', value);
			//socket.broadcast.emit('object:modifying', value);
        });
        
        socket.on('object:stoppedModifying', function (value) {
            //send object:stoppedModifying to everyone except the sender
			socket.broadcast.to(socket.room).emit('object:stoppedModifying', value);
            //socket.broadcast.emit('object:stoppedModifying', value);
        });
 
        socket.on('addRectangle', function (value) {
            //send object:stoppedModifying to everyone except the sender
			socket.broadcast.to(socket.room).emit('addRectangle', value);
            //socket.broadcast.emit('addRectangle', value);
        });
		
		socket.on('addCircle', function (value) {
            //send object:stoppedModifying to everyone except the sender
			socket.broadcast.to(socket.room).emit('addCircle', value);
            //socket.broadcast.emit('addCircle', value);
        });
		
		socket.on('addStar', function (value) {
            //send object:stoppedModifying to everyone except the sender
			socket.broadcast.to(socket.room).emit('addStar', value);
            //socket.broadcast.emit('addStar', value);
        });
		
		socket.on('addPolygon', function (value) {
            //send object:stoppedModifying to everyone except the sender
			socket.broadcast.to(socket.room).emit('addPolygon', value);
            //socket.broadcast.emit('addPolygon', value);
        });

		socket.on('addText', function (value) {
			socket.broadcast.to(socket.room).emit('addText', value);
            //socket.broadcast.emit('addText', value);
        });
		
		socket.on('addIcon', function (value) {
            //send object:stoppedModifying to everyone except the sender
			socket.broadcast.to(socket.room).emit('addIcon', value);
            //socket.broadcast.emit('addIcon', value);
        });
		
		socket.on('addPath', function (value) {
            //send object:stoppedModifying to everyone except the sender
			socket.broadcast.to(socket.room).emit('addPath', value);
            //socket.broadcast.emit('addPath', value);
        });
		
		socket.on('setbgColor', function (value) {
			socket.broadcast.to(socket.room).emit('setbgColor', value);
            //socket.broadcast.emit('setbgColor', value);
        });
		
		socket.on('setFigureColor', function (value) {
			socket.broadcast.to(socket.room).emit('setFigureColor', value);
            //socket.broadcast.emit('setFigureColor', value);
        });
		
		socket.on('deleteObjects', function (value) {
			socket.broadcast.to(socket.room).emit('deleteObjects', value);
            //socket.broadcast.emit('deleteObjects', value);
        });
		
		socket.on('clearScreen', function (value) {
            //send object:stoppedModifying to everyone except the sender
			socket.broadcast.to(socket.room).emit('clearScreen', value);
            //socket.broadcast.emit('clearScreen', value);
        });
    });
};