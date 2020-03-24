
$(document).ready(function() {
    initializeTimer(); // вызываем функцию инициализации таймера

    function initializeTimer() {
    	var endDate = new Date(2020,2,27,21,21); // получаем дату истечения таймера 1.год,2.месяц-1,3.день,4.часы,5.минуты
    	var currentDate = new Date(); // получаем текущую дату
    	var seconds = (endDate-currentDate) / 1000; // определяем количество секунд до истечения таймера
    	if (seconds > 0) { // проверка - истекла ли дата обратного отсчета
    		var minutes = seconds/60; // определяем количество минут до истечения таймера
    		var hours = minutes/60; // определяем количество часов до истечения таймера
    		minutes = (hours - Math.floor(hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
    		hours = Math.floor(hours); // целое количество часов до истечения таймера
    		seconds = Math.floor((minutes - Math.floor(minutes)) * 60); // подсчитываем кол-во оставшихся секунд в текущей минуте
    		minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе

    		setTimePage(hours,minutes,seconds); // выставляем начальные значения таймера

    		function secOut() {
    		  if (seconds == 0) { // если секунду закончились то
    			  if (minutes == 0) { // если минуты закончились то
    				  if (hours == 0) { // если часы закончились то
    					  showMessage(timerId); // выводим сообщение об окончании отсчета
    				  }
    				  else {
    					  hours--; // уменьшаем кол-во часов
    					  minutes = 59; // обновляем минуты
    					  seconds = 59; // обновляем секунды
    				  }
    			  }
    			  else {
    				  minutes--; // уменьшаем кол-во минут
    				  seconds = 59; // обновляем секунды
    			  }
    		  }
    		  else {
    			  seconds--; // уменьшаем кол-во секунд
    		  }
    		  setTimePage(hours,minutes,seconds); // обновляем значения таймера на странице
    		}
    		timerId = setInterval(secOut, 1000) // устанавливаем вызов функции через каждую секунду
    	}
    }

    function setTimePage(h,m,s) { // функция выставления таймера на странице
    	var element = $('.form__count-time'); // находим элемент
    	element.html('<div class="form__count-item"><span>'+h+'</span> <span>часов</span></div> : <div class="form__count-item"><span>'+m+'</span> <span>минут</span></div> : <div class="form__count-item"><span>'+s+'</span> <span>секунд</span></div>') // выставляем новые значения таймеру на странице
    }

    function showMessage(timerId) { // функция, вызываемая по истечению времени
    	clearInterval(timerId); // останавливаем вызов функции через каждую секунду
    }

    var wow = new WOW(
        {
            mobile: false,
        }
    );
    wow.init();
});
