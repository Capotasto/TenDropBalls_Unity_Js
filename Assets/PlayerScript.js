#pragma strict

function Start () {
}

function Update () {

	if(Input.GetButtonUp("Jump")){
		Debug.Log("Jumped!!");
	}

	var x : float = Input.GetAxis("Horizontal");
	var y : float = Input.GetAxis("Vertical");
	transform.Translate(x * 0.2,y * 0.2,0);

}

function OnCollisionEnter(obj : Collision){

	if(obj.gameObject.name == "RightWall"){
		Debug.Log("Hit! R");
	}
}