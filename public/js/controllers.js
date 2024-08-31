'use strict';

/**
 * Controllers
 */

angular.module('fabricApp.controllers', [])

/**
 * Main FabricJs Controller
 *
 * @TODO: Working with username is bad, replace with id
 */
.controller('HomeCtrl', function($scope, $location, commonData, socketFactory) {
    
    var homeCtrl = this;
	var flagNewCircle = false;
	var flagNewRectangle = false;
	var flagNewStar = false;
	var flagNewPolygon = false;
	var flagNewIcon = false;
	var flagNewbgColor = false;
	var flagNewFigureColor = false;
	var fontIcons = ['\uf000', '\uf001', '\uf002', '\uf003', '\uf004', '\uf005', '\uf006', '\uf007', '\uf008', '\uf009', '\uf00a', '\uf00b', '\uf00c', '\uf00d', '\uf00e', '\uf010', '\uf011', '\uf012', '\uf013', '\uf014', '\uf015', '\uf016', '\uf017', '\uf018', '\uf019', '\uf01a', '\uf01b', '\uf01c', '\uf01d', '\uf01e', '\uf021', '\uf022', '\uf023', '\uf024', '\uf025', '\uf026', '\uf027', '\uf028', '\uf029', '\uf02a', '\uf02b', '\uf02c', '\uf02d', '\uf02e', '\uf02f', '\uf030', '\uf031', '\uf032', '\uf033', '\uf034', '\uf035', '\uf036', '\uf037', '\uf038', '\uf039', '\uf03a', '\uf03b', '\uf03c', '\uf03d', '\uf03e', '\uf040', '\uf041', '\uf042', '\uf043', '\uf044', '\uf045', '\uf046', '\uf047', '\uf048', '\uf049', '\uf04a', '\uf04b', '\uf04c', '\uf04d', '\uf04e', '\uf050', '\uf051', '\uf052', '\uf053', '\uf054', '\uf055', '\uf056', '\uf057', '\uf058', '\uf059', '\uf05a', '\uf05b', '\uf05c', '\uf05d', '\uf05e', '\uf060', '\uf061', '\uf062', '\uf063', '\uf064', '\uf065', '\uf066', '\uf067', '\uf068', '\uf069', '\uf06a', '\uf06b', '\uf06c', '\uf06d', '\uf06e', '\uf070', '\uf071', '\uf072', '\uf073', '\uf074', '\uf075', '\uf076', '\uf077', '\uf078', '\uf079', '\uf07a', '\uf07b', '\uf07c', '\uf07d', '\uf07e', '\uf080', '\uf081', '\uf082', '\uf083', '\uf084', '\uf085', '\uf086', '\uf087', '\uf088', '\uf089', '\uf08a', '\uf08b', '\uf08c', '\uf08d', '\uf08e', '\uf090', '\uf091', '\uf092', '\uf093', '\uf094', '\uf095', '\uf096', '\uf097', '\uf098', '\uf099', '\uf09a', '\uf09b', '\uf09c', '\uf09d', '\uf09e', '\uf0a0', '\uf0a1', '\uf0f3', '\uf0a3', '\uf0a4', '\uf0a5', '\uf0a6', '\uf0a7', '\uf0a8', '\uf0a9', '\uf0aa', '\uf0ab', '\uf0ac', '\uf0ad', '\uf0ae', '\uf0b0', '\uf0b1', '\uf0b2', '\uf0c0', '\uf0c1', '\uf0c2', '\uf0c3', '\uf0c4', '\uf0c5', '\uf0c6', '\uf0c7', '\uf0c8', '\uf0c9', '\uf0ca', '\uf0cb', '\uf0cc', '\uf0cd', '\uf0ce', '\uf0d0', '\uf0d1', '\uf0d2', '\uf0d3', '\uf0d4', '\uf0d5', '\uf0d6', '\uf0d7', '\uf0d8', '\uf0d9', '\uf0da', '\uf0db', '\uf0dc', '\uf0dd', '\uf0de', '\uf0e0', '\uf0e1', '\uf0e2', '\uf0e3', '\uf0e4', '\uf0e5', '\uf0e6', '\uf0e7', '\uf0e8', '\uf0e9', '\uf0ea', '\uf0eb', '\uf0ec', '\uf0ed', '\uf0ee', '\uf0f0', '\uf0f1', '\uf0f2', '\uf0a2', '\uf0f4', '\uf0f5', '\uf0f6', '\uf0f7', '\uf0f8', '\uf0f9', '\uf0fb', '\uf0fc', '\uf0fd', '\uf0fe', '\uf100', '\uf101', '\uf102', '\uf103', '\uf104', '\uf105', '\uf106', '\uf107', '\uf108', '\uf109', '\uf10a', '\uf10b', '\uf10c', '\uf10d', '\uf10e', '\uf110', '\uf111', '\uf112', '\uf113', '\uf114', '\uf115', '\uf118', '\uf119', '\uf11a', '\uf11b', '\uf11c', '\uf11d', '\uf11e', '\uf120', '\uf121', '\uf122', '\uf123', '\uf124', '\uf125', '\uf126', '\uf127', '\uf128', '\uf129', '\uf12a', '\uf12b', '\uf12c', '\uf12d', '\uf12e', '\uf130', '\uf131', '\uf132', '\uf133', '\uf134', '\uf135', '\uf136', '\uf137', '\uf138', '\uf139', '\uf13a', '\uf13b', '\uf13c', '\uf13d', '\uf13e', '\uf140', '\uf141', '\uf142', '\uf143', '\uf144', '\uf145', '\uf146', '\uf147', '\uf148', '\uf149', '\uf14a', '\uf14b', '\uf14c', '\uf14d', '\uf14e', '\uf150', '\uf151', '\uf152', '\uf153', '\uf154', '\uf155', '\uf156', '\uf157', '\uf158', '\uf159', '\uf15a', '\uf15b', '\uf15c', '\uf15d', '\uf15e', '\uf160', '\uf161', '\uf162', '\uf163', '\uf164', '\uf165', '\uf166', '\uf167', '\uf168', '\uf169', '\uf16a', '\uf16b', '\uf16c', '\uf16d', '\uf16e', '\uf170', '\uf171', '\uf172', '\uf173', '\uf174', '\uf175', '\uf176', '\uf177', '\uf178', '\uf179', '\uf17a', '\uf17b', '\uf17c', '\uf17d', '\uf17e', '\uf180', '\uf181', '\uf182', '\uf183', '\uf184', '\uf185', '\uf186', '\uf187', '\uf188', '\uf189', '\uf18a', '\uf18b', '\uf18c', '\uf18d', '\uf18e', '\uf190', '\uf191', '\uf192', '\uf193', '\uf194', '\uf195', '\uf196', '\uf197', '\uf198', '\uf199', '\uf19a', '\uf19b', '\uf19c', '\uf19d', '\uf19e', '\uf1a0', '\uf1a1', '\uf1a2', '\uf1a3', '\uf1a4', '\uf1a5', '\uf1a6', '\uf1a7', '\uf1a8', '\uf1a9', '\uf1aa', '\uf1ab', '\uf1ac', '\uf1ad', '\uf1ae', '\uf1b0', '\uf1b1', '\uf1b2', '\uf1b3', '\uf1b4', '\uf1b5', '\uf1b6', '\uf1b7', '\uf1b8', '\uf1b9', '\uf1ba', '\uf1bb', '\uf1bc', '\uf1bd', '\uf1be', '\uf1c0', '\uf1c1', '\uf1c2', '\uf1c3', '\uf1c4', '\uf1c5', '\uf1c6', '\uf1c7', '\uf1c8', '\uf1c9', '\uf1ca', '\uf1cb', '\uf1cc', '\uf1cd', '\uf1ce', '\uf1d0', '\uf1d1', '\uf1d2', '\uf1d3', '\uf1d4', '\uf1d5', '\uf1d6', '\uf1d7', '\uf1d8', '\uf1d9', '\uf1da', '\uf1db', '\uf1dc', '\uf1dd', '\uf1de', '\uf1e0', '\uf1e1', '\uf1e2', '\uf1e3', '\uf1e4', '\uf1e5', '\uf1e6', '\uf1e7', '\uf1e8', '\uf1e9', '\uf1ea', '\uf1eb', '\uf1ec', '\uf1ed', '\uf1ee', '\uf1f0', '\uf1f1', '\uf1f2', '\uf1f3', '\uf1f4', '\uf1f5', '\uf1f6', '\uf1f7', '\uf1f8', '\uf1f9', '\uf1fb', '\uf1fc', '\uf1fd', '\uf1fe', '\uf200', '\uf201', '\uf202', '\uf203', '\uf204', '\uf205', '\uf206', '\uf207', '\uf208', '\uf209', '\uf20a', '\uf20b', '\uf20c', '\uf20d', '\uf20e', '\uf210', '\uf211', '\uf212', '\uf213', '\uf214', '\uf215', '\uf216', '\uf217', '\uf218', '\uf219', '\uf21a', '\uf21b', '\uf21c', '\uf21d', '\uf21e', '\uf221', '\uf222', '\uf223', '\uf224', '\uf225', '\uf226', '\uf227', '\uf228', '\uf229', '\uf22a', '\uf22b', '\uf22c', '\uf22d', '\uf230', '\uf231', '\uf232', '\uf233', '\uf234', '\uf235', '\uf236', '\uf237', '\uf238', '\uf239', '\uf23a', '\uf23b', '\uf23c', '\uf23d', '\uf23e', '\uf240', '\uf241', '\uf242', '\uf243', '\uf244', '\uf245', '\uf246', '\uf247', '\uf248', '\uf249', '\uf24a', '\uf24b', '\uf24c', '\uf24d', '\uf24e', '\uf250', '\uf251', '\uf252', '\uf253', '\uf254', '\uf255', '\uf256', '\uf257', '\uf258', '\uf259', '\uf25a', '\uf25b', '\uf25c', '\uf25d', '\uf25e', '\uf260', '\uf261', '\uf262', '\uf263', '\uf264', '\uf265', '\uf266', '\uf267', '\uf268', '\uf269', '\uf26a', '\uf26b', '\uf26c', '\uf26d', '\uf26e', '\uf270', '\uf271', '\uf272', '\uf273', '\uf274', '\uf275', '\uf276', '\uf277', '\uf278', '\uf279', '\uf27a', '\uf27b', '\uf27c', '\uf27d', '\uf27e', '\uf280'];
    var figureColors = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#00FFFF', '#000000', '#FF8000', '#008040'];
	var isMouseDown = false;
	var selectedGroup = new fabric.Group();
	
    if ((commonData.Name === '') || (commonData.RoomId === '')) {
        $location.path('/');
        return;
    }
    else {
        //socketFactory.emit('setUser', commonData.Name);
		socketFactory.emit('addToRoom',{'room':commonData.RoomId, 'user':commonData.Name});
	}

    homeCtrl.getEditorBubble = function(username) {
        return $('div[data-user-id="'+username+'"]');
    };
    
    
    /**
     * Get FabricJs Object by Id
     */
    homeCtrl.getObjectById = function(id) {
        
        for(var i = 0; i < $scope.objList.length; i++) {
            if ($scope.objList[i].id === id)
                return $scope.objList[i];
        }
        
    }; 
	
	homeCtrl.removeObjectById = function(id) {
        $scope.objList = $scope.objList.filter(x => {
			return x.Id != id;
		});
		//console.log('Add new path ' + $scope.objList);
    }; 
	
    homeCtrl.getHighestId = function() {

        var highestId = 0;
        for(var i = 0; i < $scope.objList.length; i++) {
            if ($scope.objList[i].id > highestId)
                highestId = $scope.objList[i].id;
        }
        return highestId;
    };
    
    /**
     * Resize Canvas
     *
     * @TODO: Replace static optimal width with constant
     */
    homeCtrl.resizeCanvas = function (){ 
        var minWidth = 480;
		var minHeight = 480;
        var containerWidth = $(homeCtrl.container).width() > minWidth ? $(homeCtrl.container).width() : minWidth;
		var containerHeight = $(homeCtrl.container).height() > minHeight ? (Math.max(document.documentElement.clientHeight, window.innerHeight || 0)-25) : minHeight;
		
        var scaleFactor = containerWidth / 847;

        $scope.canvas.setDimensions({
            width: containerWidth,
            height: containerHeight
        });

        $scope.canvas.setZoom(scaleFactor);
        $scope.canvas.calcOffset();
        $scope.canvas.renderAll();

    }
    
    /**
     * Init Function
     *
     * @TODO: Load FabricJs objects from Server
     */
    homeCtrl.init = function() {

        // create a wrapper around native canvas element (with id="fabricjs")
        $scope.canvas = new fabric.Canvas('fabricjs');
		/*, { selection: true, preserveObjectStacking: true, stopContextMenu: true, }*/
		$scope.canvas.backgroundColor = '#FFFFFF'
        homeCtrl.container = $('#canvas-container');
		//var ctx = $scope.canvas.getContext('2d');
        //Register resize event
        $(window).resize( homeCtrl.resizeCanvas );

        //Resize canvas on first load
        homeCtrl.resizeCanvas();
		
		//Disable context menu
		fabric.util.addListener(document.getElementsByClassName('upper-canvas')[0], 'contextmenu', function(e) {
			var cnvsPos = $('#fabricjs').offset();
			var curX = e.clientX - cnvsPos.left + 15;
			var curY = e.clientY - cnvsPos.top + 25;
			e.preventDefault();
			$('#myMenu').css({'top': curY, 'left': curX}).fadeIn('slow');
			//console.log("Position of the cursor point" + curX + "," + curY);
		});

        //init objList
        $scope.objList = [
            new fabric.Rect({
                left: 100,
                top: 120,
                fill: '#008040',
                width: 100,
                height: 100,
                originX: 'center',
                originY: 'center',
                id: 0
            }),

            new fabric.Ellipse({
                left: 220,
                top: 120,
                fill: '#FF0000',
                radius: 50,
				rx:50,
                ry: 50,
                originX: 'center',
                originY: 'center',
                id: 1
            }),
            
            new fabric.Triangle({
                left: 340,
                top: 120,
                fill: '#FF00FF',
                width: 100,
                height: 100,
                originX: 'center',
                originY: 'center',
                id: 2
            }),
            new fabric.Text('Какая-то надпись', {
                left: 300, 
                top: 300,
                fill: '#FF8000',
                fontFamily: 'Oxygen',
                originX: 'center',
                originY: 'center',
                id: 3
            })
        ];
        
        //add all objects to the canvas
        $scope.objList.forEach(function(obj) {
            $scope.canvas.add(obj);
        });
        
        //add image from url
        fabric.Image.fromURL('images/icons/user.png', function(oImg) {
            oImg.id = 4;
            
            oImg.originX = 'center';
            oImg.originY = 'center';
            
            oImg.left = 460;
            oImg.top = 120;
            
            $scope.objList.push(oImg);
            $scope.canvas.add(oImg);
        });

        homeCtrl.initDrag();

        //register canvas events
        //$scope.canvas.on('selection:created', this.emitGroupModifying);
		$scope.canvas.on('object:moving', this.emitObjectModifying);
        $scope.canvas.on('object:scaling', this.emitObjectModifying);
        $scope.canvas.on('object:rotating', this.emitObjectModifying);
        $scope.canvas.on('object:color', this.emitObjectModifying);
        $scope.canvas.on('mouse:up', this.emitObjectStoppedModifying);
        $scope.canvas.on('mouse:up', this.dragMouseUp);
		$scope.canvas.on('mouse:down', this.mouseDown);
		$scope.canvas.on('path:created', this.addPath);

        //register socket events
        socketFactory.on('object:modifying', this.onObjectModifying);
        socketFactory.on('object:stoppedModifying', this.onObjectStoppedModifying);
        socketFactory.on('addRectangle', this.onAddRectangle);
        socketFactory.on('addCircle', this.onAddCircle);
		socketFactory.on('addStar', this.onAddStar);
		socketFactory.on('addPolygon', this.onAddPolygon);
		socketFactory.on('addIcon', this.onAddIcon);
		socketFactory.on('addText', this.onAddText);
		socketFactory.on('addPath', this.onAddPath);
		socketFactory.on('setbgColor', this.onSetbgColor);
		socketFactory.on('setFigureColor', this.onSetFigureColor);
		socketFactory.on('deleteObjects', this.onDeleteObjects);
		socketFactory.on('clearScreen', this.onСlearScreen);
		socketFactory.on('giveuser', this.onGiveuser);
		socketFactory.on('socket_id', this.onSocketId);
	
        socketFactory.on('userConnect', this.setUsers);
    };

	
	//Receive socket.id of the user
	homeCtrl.onSocketId = function(id){
	//Remove special characters from the socket id
	var my_socket_id=(id).replace(/[^a-z0-9]/gi,'');
    };
	
    homeCtrl.setUsers = function(value) {
		$scope.users = value; 
    };
 
    homeCtrl.initDrag = function() {

        $(window).on('mouseup', function(event) {
            homeCtrl.dragMouseUp(event);
        }).on('mousemove', function(event) {
            homeCtrl.dragMouseMove(event);
        }).on('mousedown', function (event) {
			homeCtrl.mouseDown(event);
        });

        homeCtrl.addRectangle = $('#addRectangle');
        homeCtrl.addRectangle.on('mousedown', function(event) {
            homeCtrl.lockDrag = true;
            homeCtrl.dragObject = $('<div class="addRectangle"><svg height="50" width="50"><rect x="0" y="0" width="50" height="50" fill="#2ecc71"/></svg></div>');
            homeCtrl.dragObject.css('position', 'fixed');
            homeCtrl.dragObject.css('top', event.clientY);
            homeCtrl.dragObject.css('left', event.clientX);
            $('body').append(homeCtrl.dragObject);
			homeCtrl.flagNewRectangle = true;
            event.preventDefault();
        });

		homeCtrl.addCircle = $('#addCircle');
        homeCtrl.addCircle.on('mousedown', function(event) {
            homeCtrl.lockDrag = true;
            homeCtrl.dragObject = $('<div class="addCircle"><svg height="40" width="40"><circle cx="20" cy="20" r="19" fill="red" /></svg></div>');
            homeCtrl.dragObject.css('position', 'fixed');
            homeCtrl.dragObject.css('top', event.clientY);
            homeCtrl.dragObject.css('left', event.clientX);
            $('body').append(homeCtrl.dragObject);
			homeCtrl.flagNewCircle = true;
            event.preventDefault();
        });
		
		homeCtrl.addStar = $('#addStar');
        homeCtrl.addStar.on('mousedown', function(event) {
            homeCtrl.lockDrag = true;
            homeCtrl.dragObject = $('<div class="addStar"><svg xmlns="http://www.w3.org/2000/svg" width="50px" height="45.8px" viewBox="0 0 300 275" version="1.1"><polygon fill="orange" stroke="orange" stroke-width="10" color="orange" points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"/></svg></div>');
            homeCtrl.dragObject.css('position', 'fixed');
            homeCtrl.dragObject.css('top', event.clientY);
            homeCtrl.dragObject.css('left', event.clientX);
            $('body').append(homeCtrl.dragObject);
			homeCtrl.flagNewStar = true;
            event.preventDefault();
        });
		
		homeCtrl.addPolygon = $('#addPolygon');
        homeCtrl.addPolygon.on('mousedown', function(event) {
            homeCtrl.lockDrag = true;
            homeCtrl.dragObject = $('<div class="addPolygon"><svg height="50" width="50" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><g><path d="M197.2,966L10,390L500,34l490,356L802.8,966H197.2z"/></g></svg></div>');
            homeCtrl.dragObject.css('position', 'fixed');
            homeCtrl.dragObject.css('top', event.clientY);
            homeCtrl.dragObject.css('left', event.clientX);
            $('body').append(homeCtrl.dragObject);
			homeCtrl.flagNewPolygon = true;
            event.preventDefault();
        });
		
		homeCtrl.addIcon = $('#addIcon');
        homeCtrl.addIcon.on('mousedown', function(event) {
            homeCtrl.lockDrag = true;
            homeCtrl.dragObject = $('<div class="addIcon"> <i class="fa fa-flag fa-3" aria-hidden="true"></i></div>');
            homeCtrl.dragObject.css('position', 'fixed');
            homeCtrl.dragObject.css('top', event.clientY);
            homeCtrl.dragObject.css('left', event.clientX);
            $('body').append(homeCtrl.dragObject);
			homeCtrl.flagNewIcon = true;
            event.preventDefault();
        });

		/*
		homeCtrl.bgColor = $('#bgColor');
        homeCtrl.bgColor.on('input', function(event) {
			homeCtrl.flagNewbgColor = true;
			event.preventDefault();
        });
		*/
    };
	

	// select all objects
	homeCtrl.deleteObjects = function (){
		var activeGroup = $scope.canvas.getActiveObjects();
		if (confirm('Вы хотите удалить выделенный объект(ы)?')) {
			var iDS = [];
			var id;
			activeGroup.forEach(function(object) {
				id = object.id;
				iDS.push(id);
				homeCtrl.removeObjectById(id);
				$scope.canvas.remove(object);
				$scope.canvas.renderAll();
			});
			$scope.canvas.discardActiveObject();
			socketFactory.emit('deleteObjects', {
				objectsInGroup: iDS,
				type: 'multiple'
			});
		}	
	}

	homeCtrl.onDeleteObjects = function (data){
		if (data.type === 'one') {
			var activeObject = homeCtrl.getObjectById(data.id);
			homeCtrl.removeObjectById(data.id);
			$scope.canvas.remove(activeObject);
			$scope.canvas.renderAll();
		}
		else if (data.type === 'multiple') {
			var objectsInGroup = data.objectsInGroup;
			objectsInGroup.forEach(function(id) {
				homeCtrl.removeObjectById(id);
				$scope.canvas.remove(homeCtrl.getObjectById(id));
				$scope.canvas.renderAll();
			});
		}
	}
	
	homeCtrl.mouseDown = function(event) {
		console.log('canvas mousedown');
		if (!$(event.target).closest('#myMenu').length) {
			if ($('#myMenu').css("display", "block")) {
				$('#myMenu').css("display", "none");
			}
		}
		if (event.which === 3) {
			console.log('Canvas right mouse down.');
                var aktivesObjekt = $scope.canvas.getActiveObject();
					if(aktivesObjekt != undefined) {
                        var imsType = aktivesObjekt.get('imsType');
                        console.log('imsType = ' + imsType);
                        if(imsType === 'activitie') {
                        console.log('2 imsType = ' + imsType);
                        var aPosX = aktivesObjekt.get("left");
                        var aPosY = aktivesObjekt.get("top");
                        var aPosW = aktivesObjekt.get("width");
                        var aPosH = aktivesObjekt.get("height");
                            var posX = aPosX + aPosW;
                            var posY = aPosY + aPosH;
                        console.log('posX = ' + posX);
                        console.log('posY = ' + posY);
                            $('#contextMenueActivities').css('top', posY);
                            $('#contextMenueActivities').css('left', posX);
                            $('#contextMenueActivities').css('display', 'block');
                        }
                        else
                            {
                                console.log('3imsType = ' + imsType);
                            }
					}             
		}else if (event.which === 2){
			
		}else if (event.which === 1){
			
		}
		
	};
	
    homeCtrl.dragMouseMove = function(event) {
        if (homeCtrl.lockDrag && homeCtrl.dragObject != undefined) {
            event.preventDefault();
            console.log('moving');
            homeCtrl.dragObject.css('top', event.clientY - homeCtrl.dragObject.outerHeight());
            homeCtrl.dragObject.css('left', event.clientX - homeCtrl.dragObject.outerWidth());
        } 
		homeCtrl.isMouseDown = true;
    };
	
	homeCtrl.dragMouseUp = function(event) {
		//event.stopPropagation();
		//event.stopImmediatePropagation();
        homeCtrl.lockDrag = false;
        if (typeof homeCtrl.dragObject !== 'undefined') {
            homeCtrl.dragObject.remove();
            homeCtrl.addNewShape(event);
            homeCtrl.dragObject = undefined;
        }
		homeCtrl.isMouseDown = false;
		$scope.canvas.renderAll();
    };
	
	homeCtrl.addPath = function(event) {
			var drawingPath = event.path;
			var newId = homeCtrl.getHighestId() + 1,
				objectLeft = drawingPath.left + drawingPath.width/2,
				objectTop = drawingPath.top + drawingPath.height/2;
			drawingPath.set({
				id: newId,
				left: objectLeft,
				top: objectTop,
				originX: 'center', 
				originY: 'center'
			});
			
			socketFactory.emit('addPath', {
				path: drawingPath.path,
				left: drawingPath.left,
				top: drawingPath.top,
				fill: drawingPath.fill,
				stroke: drawingPath.stroke,
				strokeWidth: drawingPath.strokeWidth,
				width: drawingPath.width,
				height: drawingPath.height,
				originX: drawingPath.originX,
				originY: drawingPath.originY,
				id: drawingPath.id
			});
			$scope.objList.push(drawingPath);
			//$scope.canvas.add(drawingPath);
			$scope.canvas.renderAll();
			console.log('Add new path ' + drawingPath.id);
	}
		
	
	
    homeCtrl.onAddPath = function(data) {

        var newpath = new fabric.Path(data.path, {
            left: data.left,
            top: data.top,
            fill: data.fill,
			stroke: data.stroke,
			strokeWidth: data.strokeWidth,
            width: data.width,
            height: data.height,
            originX: data.originX,
            originY: data.originY,
            id: data.id
        });

        $scope.objList.push(newpath);
        $scope.canvas.add(newpath);
        $scope.canvas.renderAll();
		console.log('onAdd new path ' + data.id);
    };
	
	homeCtrl.addNewShape = function(event) {
		if       (homeCtrl.flagNewCircle){
			homeCtrl.addNewCircle(event);
			homeCtrl.flagNewCircle = false;
		}else if (homeCtrl.flagNewRectangle) {
			homeCtrl.addNewRectangle(event);
			homeCtrl.flagNewRectangle = false;
		}else if (homeCtrl.flagNewStar) {
			homeCtrl.addNewStar(event);
			homeCtrl.flagNewStar = false;
		}else if (homeCtrl.flagNewPolygon) {
			homeCtrl.addNewPolygon(event);
			homeCtrl.flagNewPolygon = false;
		}else if (homeCtrl.flagNewIcon) {
			homeCtrl.addNewIcon(event);
			homeCtrl.flagNewIcon = false;
		}
	};
	
    homeCtrl.addNewRectangle = function(event) {

        var left, top, fill, id;

        left = ((event.clientX - $(homeCtrl.container).offset().left) - 25) / $scope.canvas.getZoom();
        top = (event.pageY - $(homeCtrl.container).offset().top) / $scope.canvas.getZoom();
        fill = homeCtrl.getRandomColor();
		id = homeCtrl.getHighestId() + 1;

        console.log(left);
        console.log(top);

        var rectangle = new fabric.Rect({
            left: left,
            top: +top,
            fill: fill,
            width: 50,
            height: 50,
            originX: 'center',
            originY: 'center',
            id: id
        });

        socketFactory.emit('addRectangle', {
            left: left,
            top: +top,
			fill: fill,
            id: id
        });
        $scope.objList.push(rectangle);
        $scope.canvas.add(rectangle);
        $scope.canvas.renderAll();
    };
	
	homeCtrl.addNewCircle = function(event) {

        var left, top, fill, id;

        left = ((event.clientX - $(homeCtrl.container).offset().left) - 25) / $scope.canvas.getZoom();
        top = (event.pageY - $(homeCtrl.container).offset().top) / $scope.canvas.getZoom();
		fill = homeCtrl.getRandomColor();
        id = homeCtrl.getHighestId() + 1;
		
		
        console.log(left);
        console.log(top);
		console.log(fill);

        var circle = new fabric.Ellipse({
            left: left,
            top: +top,
            fill: fill,
            rx: 25,
			ry: 25,
            originX: 'center',
            originY: 'center',
            id: id
        });
		console.log('Add new circle ' + id);

        socketFactory.emit('addCircle', {
            left: left,
            top: +top,
			fill: fill,
            id: id
        });
        $scope.objList.push(circle);
        $scope.canvas.add(circle);
        $scope.canvas.renderAll();
    };
		
	homeCtrl.addNewPolygon = function(event) {
		var left, top, fill, numPoints, id;
		numPoints = homeCtrl.getRandomInt(5,8);
        left = ((event.clientX - $(homeCtrl.container).offset().left) - 25) / $scope.canvas.getZoom();
        top = (event.pageY - $(homeCtrl.container).offset().top) / $scope.canvas.getZoom();
		fill = homeCtrl.getRandomColor();
        id = homeCtrl.getHighestId() + 1;

		// make a star
		var points=homeCtrl.regularPolygonPoints(numPoints,50,25);
		var myPolygon = new fabric.Polygon(points, {
			left: left,
			top: top,
			fill: fill,
			originX: 'center',
            originY: 'center',
			id: id
			});

		socketFactory.emit('addPolygon', {
			points: points,
            left: left,
            top: +top,
			fill: fill,
            id: id
        });	
		
		$scope.objList.push(myPolygon);
		$scope.canvas.add(myPolygon);
		$scope.canvas.renderAll();
    };
	
	homeCtrl.addNewStar = function(event) {
		var left, top, fill, numPoints, id;
		numPoints = homeCtrl.getRandomInt(3,8);
        left = ((event.clientX - $(homeCtrl.container).offset().left) - 25) / $scope.canvas.getZoom();
        top = (event.pageY - $(homeCtrl.container).offset().top) / $scope.canvas.getZoom();
		fill = homeCtrl.getRandomColor();
        id = homeCtrl.getHighestId() + 1;

		// make a star
		var points=homeCtrl.starPolygonPoints(numPoints,50,25);
		var myStar = new fabric.Polygon(points, {
			left: left,
			top: top,
			fill: fill,
			originX: 'center',
            originY: 'center',
			id: id
			});

		socketFactory.emit('addStar', {
			points: points,
            left: left,
            top: +top,
			fill: fill,
            id: id
        });	
		
		$scope.objList.push(myStar);
		$scope.canvas.add(myStar);
		$scope.canvas.renderAll();
    };
	
	homeCtrl.addNewIcon = function(event) {
        var left, top, fill, iconHEX, id;
        left = ((event.clientX - $(homeCtrl.container).offset().left) - 25) / $scope.canvas.getZoom();
        top = (event.pageY - $(homeCtrl.container).offset().top) / $scope.canvas.getZoom();
		fill = homeCtrl.getRandomColor();
		iconHEX = fontIcons[homeCtrl.getRandomInt(0,582)];
		//iconHEX = String.fromCharCode(homeCtrl.getRandomInt(61440,62080));
        id = homeCtrl.getHighestId() + 1;
		
		var myText = new fabric.IText( iconHEX,{
			left: left, //Take the block position
			top: top,
			fill: fill,
			originX: 'center', 
			originY: 'center',
			fontSize:60,
			fontFamily:'FontAwesome',
			id: id
		});

        socketFactory.emit('addIcon', {
            iconHEX: iconHEX,
			left: left,
            top: +top,
			fill: fill,
			fontSize: 60,
			fontFamily:'FontAwesome',
            id: id
        });
        $scope.objList.push(myText);
        $scope.canvas.add(myText);
        $scope.canvas.renderAll();
    };
	
	homeCtrl.setbgColor = function(newbgColor) {
		$scope.canvas.backgroundColor = newbgColor;
        $scope.canvas.renderAll();
		socketFactory.emit('setbgColor', {
			bgColor: newbgColor
        });	
    };

	homeCtrl.setFigureColor = function(fill) {
		var activeGroup = $scope.canvas.getActiveObjects();
		if (confirm('Вы хотите изменить цвет объекта(ов)?')) {
			var iDS = [];
			activeGroup.forEach(function(object) {
				var id = object.id;
				iDS.push(id);
				var type = object.get('type');
				if (type != 'path') {
					object.set({
						'fill': fill
					});
				} else if (type === 'path') {
					object.set({
						'stroke': fill
					});
			}
			});
			//$scope.canvas.discardActiveObject();
			$scope.canvas.renderAll();
			socketFactory.emit('setFigureColor', {
				iDS: iDS,
				fill: fill
			});
		}	
		console.log('SetFigureColor ' + fill);
    };
	
    homeCtrl.onAddRectangle = function(data) {

        var rectangle = new fabric.Rect({
            left: data.left,
            top: data.top,
            fill: data.fill,
            width: 50,
            height: 50,
            originX: 'center',
            originY: 'center',
            id: data.id
        });

        $scope.objList.push(rectangle);
        $scope.canvas.add(rectangle);
        $scope.canvas.renderAll();
		//console.log('onAdd new rectangle ' + data.id);
    };

	homeCtrl.onAddCircle = function(data) {

        var circle = new fabric.Ellipse({
            left: data.left,
            top: data.top,
            fill: data.fill,
            rx: 25,
			ry: 25,
            originX: 'center',
            originY: 'center',
            id: data.id
        });

        $scope.objList.push(circle);
        $scope.canvas.add(circle);
        $scope.canvas.renderAll();
		console.log('onAdd new circle ' + data.id);
    };

	homeCtrl.onAddStar = function(data) {
        var myStar = new fabric.Polygon(data.points, {
            left: data.left,
            top: data.top,
            fill: data.fill,
			originX: 'center',
            originY: 'center',
            id: data.id
        });
		
        $scope.objList.push(myStar);
        $scope.canvas.add(myStar);
        $scope.canvas.renderAll();
		//console.log('onAdd new star ' + data.id);
    };
	
	homeCtrl.onAddPolygon = function(data) {
        var myStar = new fabric.Polygon(data.points, {
            left: data.left,
            top: data.top,
            fill: data.fill,
			originX: 'center',
            originY: 'center',
            id: data.id
        });
		
        $scope.objList.push(myStar);
        $scope.canvas.add(myStar);
        $scope.canvas.renderAll();
		//console.log('onAdd new polygon ' + data.id);
    };
	
	homeCtrl.onAddIcon = function(data) {

		var myText = new fabric.IText(data.iconHEX,{
			left: data.left, //Take the block position
			top: data.top,
			fill: data.fill,
			originX: 'center', 
			originY: 'center',
			fontSize: data.fontSize,
			fontFamily:'FontAwesome',
			id: data.id
		});
        $scope.objList.push(myText);
        $scope.canvas.add(myText);
        $scope.canvas.renderAll();
		//console.log('onAdd new circle ' + data.id);
    };
	
	homeCtrl.onAddText = function(data) {
		var myText = new fabric.IText(data.textString,{
			left: data.left, //Take the block position
			top: data.top,
			fill: data.fill,
			originX: 'center', 
			originY: 'center',
			fontFamily: data.fontFamily,
			id: data.id
		});
        $scope.objList.push(myText);
        $scope.canvas.add(myText);
        $scope.canvas.renderAll();
    };
	
	homeCtrl.onSetbgColor = function(data) {
		var newbgColor = data.bgColor;
		$scope.canvas.backgroundColor = newbgColor;
        $scope.canvas.renderAll();
		//console.log('onAdd new circle ' + data.id);
    };
	
	homeCtrl.onSetFigureColor = function (data){
		var objectsInGroup = [];
		objectsInGroup = data.iDS;
		objectsInGroup.forEach(function(id) {
			var object = homeCtrl.getObjectById(id);
			var type = object.get('type');
			if (type != 'path') {
				object.set({
					//'stroke': fill,
					'fill': data.fill
				});
			} else if (type === 'path') {
				object.set({
					'stroke': data.fill
					//'fill': data.fill
				});
			}
		});
		$scope.canvas.renderAll();
	}

	
	homeCtrl.onСlearScreen = function(data) {
		$scope.canvas.getObjects().forEach(function (canvasObject){
			homeCtrl.removeObjectById(canvasObject.id);
			$scope.canvas.remove(canvasObject);
		});
		$scope.objList = [];
		$scope.canvas.renderAll();
    };
	
    /**
     * Tell all clients we stopped modifying
     * 
     * @TODO: Working with username is bad, replace with id
     */
    homeCtrl.emitObjectStoppedModifying = function(event) {

        if (homeCtrl.isModifying) {
            socketFactory.emit('object:stoppedModifying', {
                username: commonData.Name
            });
        }

        if (homeCtrl.lockDrag && homeCtrl.dragObject != undefined) {
            homeCtrl.lockDrag = false;
            if (typeof homeCtrl.dragObject !== 'undefined') {
                homeCtrl.dragObject.remove();
                homeCtrl.addNewShape(event);
                homeCtrl.dragObject = undefined;
            }
        }
    };
	
    homeCtrl.emitObjectModifying = function(event) {
		var type = event.target.get('type');
        //console.log('ObjectModifying ' + type + 'left = ' + event.target.left + 'top = ' + event.target.top);
        homeCtrl.isModifying = true;
		if (type != 'activeSelection') {
		//if (type != 'group') {
			var activeObject = event.target;
			var reachedLimit = false,
                objectLeft = activeObject.left,
                objectTop = activeObject.top,
			    objectFill = activeObject.fill,
                objectWidth = (activeObject.width * activeObject.scaleX) / 2 ,
                objectHeight = (activeObject.height * activeObject.scaleY) / 2,
                canvasWidth = $scope.canvas.width/$scope.canvas.getZoom(),
                canvasHeight = $scope.canvas.height/$scope.canvas.getZoom();

			if (objectLeft < objectWidth) {
				reachedLimit = true;
				activeObject.left = objectWidth;
			}
			if (objectLeft+objectWidth > canvasWidth) {
				reachedLimit = true;
				activeObject.left = canvasWidth-objectWidth;
			}
        
			if (objectTop < objectHeight) {
				reachedLimit = true;
				activeObject.top = objectHeight;
			}
			if (objectTop+objectHeight > canvasHeight) {
				reachedLimit = true;
				activeObject.top = canvasHeight-objectHeight;
			}
        
			//if (reachedLimit) {
				activeObject.setCoords();
				$scope.canvas.renderAll();
			//}
        
			if (typeof homeCtrl.currentMoveTimeout !== 'undefined')
				clearTimeout(homeCtrl.currentMoveTimeout);

			homeCtrl.currentMoveTimeout = setTimeout(function() {
            
				socketFactory.emit('object:modifying', {
					id: activeObject.id,
					left: activeObject.left,
					top: activeObject.top,
					fill: activeObject.fill,
					scaleX: activeObject.scaleX,
					scaleY: activeObject.scaleY,
					width: activeObject.width,
					height: activeObject.height,
					angle: activeObject.angle,
					username: commonData.Name,
					type: 'one'
				});
			}, 25);
		}
		else if (type === 'activeSelection') {
		//else if (type === 'group') {
			var activeGroup = event.target;
			activeGroup.originX = 'center';
			activeGroup.originY = 'center';
			var reachedLimit = false,
                objectLeft = activeGroup.left,
                objectTop = activeGroup.top,
			    objectFill = activeGroup.fill,
                objectWidth = (activeGroup.width * activeGroup.scaleX) / 2 ,
                objectHeight = (activeGroup.height * activeGroup.scaleY) / 2,
                canvasWidth = $scope.canvas.width/$scope.canvas.getZoom(),
                canvasHeight = $scope.canvas.height/$scope.canvas.getZoom();

			if (objectLeft < objectWidth) {
				reachedLimit = true;
				activeGroup.left = objectWidth;
			}
			if (objectLeft+objectWidth > canvasWidth) {
				reachedLimit = true;
				activeGroup.left = canvasWidth-objectWidth;
			}
        
			if (objectTop < objectHeight) {
				reachedLimit = true;
				activeGroup.top = objectHeight;
			}
			if (objectTop+objectHeight > canvasHeight) {
				reachedLimit = true;
				activeGroup.top = canvasHeight-objectHeight;
			}
        
			if (reachedLimit) {
				activeGroup.setCoords();
				$scope.canvas.renderAll();
			}
        		
			var objectsInGroup = activeGroup.getObjects();
			var id, objects = [];
			if (typeof homeCtrl.currentMoveTimeout !== 'undefined')
				clearTimeout(homeCtrl.currentMoveTimeout);
			
			homeCtrl.currentMoveTimeout = setTimeout(function() {
				objectsInGroup.forEach(function(activeObject) {
					var rad = Math.pow((Math.pow(activeObject.left*activeGroup.scaleX,2) + Math.pow(activeObject.top*activeGroup.scaleY,2)), 0.5);
					var fiAngle = Math.atan2((activeObject.top*activeGroup.scaleY), (activeObject.left*activeGroup.scaleX)) + (activeGroup.angle*Math.PI/180);
					objects.push({
						id: activeObject.id,
						left: activeGroup.left + rad*Math.cos(fiAngle),
						top:  activeGroup.top + rad*Math.sin(fiAngle),
						fill: activeObject.fill,
						scaleX: activeObject.scaleX*activeGroup.scaleX,
						scaleY: activeObject.scaleY*activeGroup.scaleY,
						width: (activeObject.width * activeObject.scaleX),
						height: (activeObject.height * activeObject.scaleY),
						angle: ((activeGroup.angle + activeObject.angle) % 360)
					});
					console.log('Type: ' + activeObject.type + ' left = ' + activeObject.left + ' top = ' + activeObject.top + ' fiAngle ' + fiAngle);
				});

				socketFactory.emit('object:modifying', {
					objects: objects,
					left: activeGroup.left,
					top: activeGroup.top,
					width: activeGroup.width,
					height: activeGroup.height,
					scaleX: activeGroup.scaleX,
					scaleY: activeGroup.scaleY,
					angle: activeGroup.angle,
					username: commonData.Name, 
					type: 'multiple'
				});
			}, 25);
		}
    };
    
    /**
     * Object was modified by another client
     *
     * @TODO: Move editorBubble into own function
     */
    homeCtrl.onObjectModifying = function(value) {
		
		var editorBubble = homeCtrl.getEditorBubble(value.username);

		if (homeCtrl.getEditorBubble(value.username).length == 0) {
			$('#mainView').append('<div class="editorBubble" data-user-id="'+value.username+'"><i class="fa fa-user"></i><span class="username"></span></div>');
		}

		if (editorBubble.css('display') == 'none')
			editorBubble.fadeIn(400);
				
        if (value.type === 'one'){
			var obj = homeCtrl.getObjectById(value.id);
			if (typeof obj !== 'undefined') {
				obj.animate({
					left: value.left,
					top: value.top,
					scaleX: value.scaleX,
					scaleY: value.scaleY,
					width: value.width,
					height: value.height,
					angle: value.angle
				}, {
					duration: 500,
					onChange: function () {
						obj.setCoords();
						if (obj.type === 'image') {
							//obj.scaleToWidth(value.width);
							//obj.scaleToHeight(value.height);
						} else if (obj.type === 'ellipse'){
							obj.rx = obj.width/2;
							obj.ry = obj.height/2;
						}
						$scope.canvas.renderAll();

						var objectLeft = obj.left * $scope.canvas.getZoom(),
							objectTop = obj.top * $scope.canvas.getZoom(),
							objectHeight = (obj.height * obj.scaleY * $scope.canvas.getZoom()) / 2;

						editorBubble.find('span[class=username]').text(value.username);
						editorBubble.css('left', $('#fabricjs').offset().left+objectLeft-editorBubble.outerWidth() / 2);
						editorBubble.css('top', $('#fabricjs').offset().top+objectTop-objectHeight-editorBubble.outerHeight());
					},
					onComplete: function () {
                    
					}
				});

			}
		} else if (value.type === 'multiple') {
			var objects = [], objs = [];
			objects = value.objects;

			for(var i = 0; i < objects.length; i++) {
				var item = homeCtrl.getObjectById(objects[i].id);
				objs.push(item);
			}
			
			$scope.canvas.discardActiveObject();
			var i=0;
			objs.forEach(function(obj) {
				obj.animate({
					left: objects[i].left,
					top: objects[i].top,
					scaleX: value.scaleX,
					scaleY: value.scaleY,
					originX: 'center',
					originY: 'center',
					width: objects[i].width,
					height: objects[i].height,
					angle: objects[i].angle
				}, {
					duration: 500,
					onChange: function () {
						obj.setCoords();
						if (obj.type === 'image') {
							//obj.scaleToWidth(obj.width);
							//obj.scaleToHeight(obj.height);
						} else if (obj.type === 'ellipse'){
							obj.rx = obj.width/2;
							obj.ry = obj.height/2;
						}
						/*
						obj.set({
							width: obj.width * obj.scaleX,
							height: obj.height * obj.scaleY,
							scaleX: 1,
							scaleY: 1
						});
						*/
						$scope.canvas.renderAll();
						var objectLeft = obj.left * $scope.canvas.getZoom(),
							objectTop = obj.top * $scope.canvas.getZoom(),
							objectHeight = (obj.height * obj.scaleY * $scope.canvas.getZoom()) / 2;
							//objectWidth = (obj.width * obj.scaleX * $scope.canvas.getZoom()) / 2;

						editorBubble.find('span[class=username]').text(value.username);
						editorBubble.css('left', $('#fabricjs').offset().left+objectLeft-editorBubble.outerWidth() / 2);
						editorBubble.css('top', $('#fabricjs').offset().top+objectTop-objectHeight-editorBubble.outerHeight());
					},
					onComplete: function () {
                    
					}
				});
				i = i+1;
			});
		}
    };
    
    /**
     * Gets called after mouse is released on other client
     */
    homeCtrl.onObjectStoppedModifying = function(value) {
        
        homeCtrl.isModifying = false;
        
        if (typeof homeCtrl.currentMoveTimeout !== 'undefined') {
            clearTimeout(homeCtrl.currentMoveTimeout);
            homeCtrl.currentMoveTimeout = undefined;
        }

        if (homeCtrl.getEditorBubble(value.username).length > 0) {
            homeCtrl.getEditorBubble(value.username).fadeOut(400, function() {
                $(this).remove();
            });
        }
    };
	
	homeCtrl.getRandomIcon = () =>{
		function c(){return Math.floor(Math.random()*16).toString(16);}
		//var alpha = (239+(Math.random()*16))/256;
		var iconHEX = '\\uf'+c()+c()+c();
		//if (colorHEX.length < 7) colorHEX += "c";
		//iconHEX = iconHEX.substr(1,iconHEX.length);
		return iconHEX;
	};
	
	homeCtrl.getRandomColor = () =>{
		var colorHEX = figureColors[Math.floor(Math.random() * figureColors.length)];
		//function c(){return Math.floor(Math.random()*16).toString(16);}
		//var alpha = (239+(Math.random()*16))/256;
		//var colorHEX = "#"+c()+c()+c()+c()+c()+c();
		//if (colorHEX.length < 7) colorHEX += "c";
		return colorHEX;
	};
	
	homeCtrl.getRandomInt = function(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	
	homeCtrl.regularPolygonPoints = function(sideCount,radius){
		var sweep=Math.PI*2/sideCount;
		var cx=radius;
		var cy=radius;
		var points=[];
		for(var i=0;i<sideCount;i++){
			var x=cx+radius*Math.cos(i*sweep);
			var y=cy+radius*Math.sin(i*sweep);
			points.push({x:x,y:y});
		}
		return(points);
	};
	
	homeCtrl.starPolygonPoints = function(spikeCount, outerRadius, innerRadius) {
		var rot = Math.PI / 2 * 3;
		var cx = outerRadius;
		var cy = outerRadius;
		var sweep = Math.PI / spikeCount;
		var points = [];
		var angle = 0;
		
		for (var i = 0; i < spikeCount; i++) {
			var x = cx + Math.cos(angle) * outerRadius;
			var y = cy + Math.sin(angle) * outerRadius;
			points.push({x: x, y: y});
			angle += sweep;
			x = cx + Math.cos(angle) * innerRadius;
			y = cy + Math.sin(angle) * innerRadius;
			points.push({x: x, y: y});
			angle += sweep
		}
	return (points);
	};
	
	
	//Элементы управления
	$("#selectionMode").click(function(){
		$scope.canvas.isDrawingMode = false;
	});
	$("#drawingMode").click(function(){
		$scope.canvas.isDrawingMode = true;
	});
	$("#deleteGroup").click(function(){
		homeCtrl.deleteObjects();
	});
	$("#deletePawn").click(function(){
		homeCtrl.deleteObjects();
	});	
	
	$("#bgColor").change(function(){
		homeCtrl.setbgColor(this.value);
	});	
	
	$("#figureColor").change(function(){
		homeCtrl.setFigureColor(this.value);
	});	
	
	$('#btn_add_image').click(function(btn_event) {
	    btn_event.preventDefault();
		
		var canvasWidth = $scope.canvas.width/$scope.canvas.getZoom(),
			canvasHeight = $scope.canvas.height/$scope.canvas.getZoom(),
			clientX = canvasWidth/2,
			pageY = canvasHeight/2;
			
		var event = {
			clientX: clientX,
			pageY: pageY
		};
			
		var textString = $('#new_text').val(),
			textColor = $('#textColor').val(),
			id = homeCtrl.getHighestId() + 1;
	    if($('#new_text').val() !== ''){
		    var newText = new fabric.IText(textString, { 
		        left: 300,
		        top: 300,
		        fill: textColor,
		        fontFamily: 'Oxygen',
                originX: 'center',
                originY: 'center',
				id: id
		    });
			socketFactory.emit('addText', {
				textString: textString,
				left: newText.left,
				top: +newText.top,
				fill: textColor,
				fontFamily: newText.fontFamily,
				id: id
			});
			$scope.objList.push(newText);
		    $scope.canvas.add(newText);
		    $scope.canvas.renderAll();
		    $('#new_text').val('');
	    }
		var selectObj = document.getElementById("shape");
		var index = selectObj.selectedIndex;
		var shape = selectObj[index].value;

		if (shape == "squares") {
			for (var squares = 0; squares < 10; squares++) {
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewRectangle(event); // to draw a square, we are callig a new function drawSquare
			}
		} else if (shape == "circles") {
			for (var circles = 0; circles < 10; circles++) {
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewCircle(event); // to draw a circle, we are calling a new function drawCircle
			}
		} else if (shape == "stars") {
			for (var stars = 0; stars < 10; stars++) {
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewStar(event); // to draw a circle, we are calling a new function drawCircle
			}
		} else if (shape == "polygons") {
			for (var polygons = 0; polygons < 10; polygons++) {
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewPolygon(event); 
			}
		} else if (shape == "icons") {
			for (var icons = 0; icons < 10; icons++) {
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewIcon(event); 
			}
		} else if (shape == "all") {
			for (var shapes = 0; shapes < 2; shapes++) {
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewCircle(event);
				
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewRectangle(event);
				
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewStar(event);
				
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewPolygon(event);
				
				event.clientX = $(homeCtrl.container).offset().left + homeCtrl.getRandomInt(100,canvasWidth-100) + 25;
				event.pageY = $(homeCtrl.container).offset().top + homeCtrl.getRandomInt(100,canvasHeight-100);
				homeCtrl.addNewIcon(event);
			}
		}
	});
	
	$("#clearScreen").click(function(){
			homeCtrl.deleteCanvasItems();
	});	
	
	homeCtrl.deleteCanvasItems = function(canvasObjects) {
		if (confirm('Вы действительно хотите очистить экран, удалив '+ $scope.canvas.getObjects().length+' фигур?')) {
			$scope.canvas.getObjects().forEach(function (canvasObject){
				homeCtrl.removeObjectById(canvasObject.id);
				$scope.canvas.remove(canvasObject);
			});
			$scope.objList = [];
			socketFactory.emit('clearScreen', {
				clear: 'clear'
			});
			$scope.canvas.renderAll();
		}
		/*
		var canvasObjects = $scope.canvas.getObjects();
		if (confirm('Вы действительно хотите очистить экран, удалив '+ canvasObjects.length+' фигур?')) {
			while(canvasObjects.length != 0 ){
				$scope.canvas.remove(canvasObjects[0]);
				$scope.canvas.discardActiveObject();
			}
			$scope.objList = [];
			socketFactory.emit('clearScreen', {
				clear: 'clear'
			});
			$scope.canvas.renderAll();
		}*/
	};
	
	//Navigation Menu Slider
    $('#nav-expander').on('click',function(e){
		e.preventDefault();
		$('body').toggleClass('nav-expanded');
    });
    $('#nav-close').on('click',function(e){
      	e.preventDefault();
      	$('body').removeClass('nav-expanded');
    });

	// Initialize navgoco with default options
    $(".main-menu").navgoco({
        caret: '<span class="caret"></span>',
        accordion: false,
        openClass: 'open',
        save: true,
        cookie: {
            name: 'navgoco',
            expires: false,
            path: '/'
        },
        slide: {
            duration: 300,
            easing: 'swing'
        }
    });
	
	/*
	Socket.io custom event handlers
	*/

	//Send current user details to the server when requested
	homeCtrl.onGiveuser = function(msg){
		if(commonData.Name != "" && commonData.RoomId != "") {
			socketFactory.emit('addToRoom', {
				'room':commonData.RoomId, 
				'user':commonData.Name
			});
		}
	};

	
    homeCtrl.init();

})


.controller('ModalContentCtrl', function($scope, $uibModalInstance) {
    $scope.submitName = function() {
		
		var user = $scope.user.name;
		user = user.trim();
		user = user.replace(/\s\s+/g, ' ');
    
		//Validiate name removing extra spaces and check for length and special characters.
		if(user!="" && !(/[^A-Za-z0-9 ]/.test(user)) && user.length>3){ 
			//$("#nameModal").modal('hide');
			//$(".user_span").html("<h5 class='h5' style='color:white'>Hello <b><u>" + user + "</u></b></h4>" );
			//socket.emit('addToRoom',{'room':myroom, 'user':user});
			//$("#roompath").val(window.location);
			//step1();
			$uibModalInstance.close(user);
		}
		else
			alert("1. Имя пользователя должно содержать буквы, цифры.\n2. Имя пользователя должно состоять как минимум из 4 символов.");
    }; 
})

/**
 * Basic Profile Controller
 */
.controller('ProfileCtrl', function($scope, commonData, $location, socketFactory, $uibModal) {
	var profileCtrl = this;

	$scope.createNewRoom = function() {
    	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		commonData.RoomId = "";
    	for( var i=0; i < 10; i++ )
        	commonData.RoomId += possible.charAt(Math.floor(Math.random() * possible.length));
		var modalInstance =  $uibModal.open({
			templateUrl: 'partials/modalContent.hbs',
			controller: 'ModalContentCtrl',
			size: '',
		});
		modalInstance.result.then(function(response){
			commonData.Name = response;
			$location.path('/fabric/:' + commonData.RoomId);
		});
	};
	
	$scope.getRoomUrl = function() { 
      	commonData.RoomId = $scope.urlToRoom;
      	commonData.RoomId = commonData.RoomId.slice(-10);
      	if(/[^a-zA-Z0-9]/.test( commonData.RoomId )){
      		commonData.RoomId = "";
      		alert("Пожалуйста введите правильную ссылку или ID комнаты длиной 10 символов.\n Пример: Fcer9vtsre");
      	}
		var modalInstance =  $uibModal.open({
			templateUrl: 'partials/modalContent.hbs',
			controller: 'ModalContentCtrl',
			size: '',
		});
		modalInstance.result.then(function(response){
			commonData.Name = response;
			$location.path('/fabric/:' + commonData.RoomId);
		});
    };
});


