function addEvent (cxt, type, data, callback) {
				 this.cxt=cxt;
				 this.type=type;
				 this.data=data;
				 this.callback=callback;
                 this.redraw();
		    }

			addEvent.prototype={
			  redraw:function  () {
			    if(this.type=="arc"){
				  this.cxt.beginPath();
				  var arr=this.data.split(",");
				  this.cxt.arc(arr[0],arr[1],arr[2],arr[3],arr[4]);
				  this.cxt.fill();
				}
				if(this.type=="rect"){
				  this.cxt.beginPath();
				  var arr=this.data.split(",");
				  this.cxt.rect(arr[0],arr[1],arr[2],arr[3]);
				  this.cxt.fill();
				}
			  },
			  add:function  (mx,my) {
                if(this.cxt.isPointInPath(mx,my)){
				    this.callback();
				}
			  }
			}