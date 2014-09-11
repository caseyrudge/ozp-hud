/** @jsx React.DOM */
var React = require('react');
var FolderModal = require('../folder/foldermodal.js');

var Folder = React.createClass({
	getInitialState: function() {
	    return {folderName: this.props.folder.folder, apps: this.props.folder.items};
    },
	rename: function(event){
		this.setState({folderName: event.target.value});
		this.props.rename.renameFolder(this.state.folderName, event.target.value);

	},
	render: function(){
		//TODO make this work for repeated folder names
        var apps = this.state.apps;
		var modalID = 'folder-modal-lg-' + this.state.folderName.replace(/\W/g, '')
        var rename = {renameFolder: this.rename, renameOnBlur: this.props.rename.renameOnBlur};

		var thumbnails = apps.map(function(app){
			return(<img key={app.name} src={app.img}/>);

		});

		return (<div>
					<a href="#" data-toggle="modal" data-target={'#' + modalID}>
						<div className="app-folder">
							{thumbnails}
						</div>
					</a>
					<h5 className="ozp-lib-name">{this.state.folderName}</h5>
					<FolderModal folderName={this.state.folderName} apps={apps} disconnect={this.props.disconnect} modalID={modalID} rename={rename} />

				</div>
			);
	}
});
module.exports = Folder;