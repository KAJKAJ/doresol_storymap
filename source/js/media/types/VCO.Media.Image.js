/*	VCO.Media.Image
	Produces image assets.
	Takes a data object and populates a dom object
================================================== */
// TODO Add link

VCO.Media.Image = VCO.Media.extend({
	
	includes: [VCO.Events],
	
	/*	Load the media
	================================================== */
	_loadMedia: function() {
		// Loading Message
		this.message.updateMessage(VCO.Language.messages.loading + " " + this.options.media_name);
		
		// this._el.content_item				= VCO.Dom.create("img", "vco-media-item vco-media-image vco-media-shadow", this._el.content);
		if(this.data.meta && this.data.meta.storyKey) {
			var ngInit = "init(\'" + this.data.meta.storyKey + "\',\'" + this.data.meta.ref_memorial + "\')";
			var tmpClass = "vco-media-item vco-media-image vco-media-shadow hover-cursor hover-opacity";
			var tmpAttri = "ng-controller='StoryDetailCtrl' " + ngInit + " ng-click='modalComment()'";
			this._el.content_item 			=	VCO.Dom.create("img", tmpClass, this._el.content);

			this._el.content_item.setAttribute('ng-init', ngInit);
			this._el.content_item.setAttribute('ng-controller', 'StoryDetailCtrl');
			this._el.content_item.setAttribute('ng-click', 'modalComment()');

		} else {
			this._el.content_item				= VCO.Dom.create("img", "vco-media-item vco-media-image vco-media-shadow", this._el.content);
		}		
		this._el.content_item.src			= this.data.url;
		
		this.onLoaded();
	},
	
	_updateMediaDisplay: function(layout) {
		
		
		if(VCO.Browser.firefox) {
			this._el.content_item.style.maxWidth = (this.options.width/2) - 40 + "px";
		}
	}
	
});