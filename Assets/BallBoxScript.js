﻿#pragma strict

var ball: Transform;
var n : int = 0;

function Update () {

	if(Input.GetButtonUp("Jump")){
		Instantiate(ball, transform.position, transform.rotation);
		n++;
	}

	if(10 < n){
		Application.LoadLevel("GameOver");
		//SceneManager.LoadScene("GameOver");

	}

}