pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;
    
    contract Urheberrecht {
        uint256 public ownerCount = 0;
        mapping(address => Owner)public ownerList;
        Image[] public imageList;
        
        struct Image {
            uint id;
            string image;
            string description;
            string update;
            address Besitzer;
        }
         struct Owner {
            string name;
            string mail;
            bool isUser;
        }
    //constructor--------------------------------------------------------
constructor() public {
        addImageinital("7fff6e0000041000","mountain peak during golden hour");
      }
    //image---------------------------------------------------------------
    
    function addImage(string memory _image,  string memory _description) public returns(string memory ok){
            if (checkImage(_image)) { 
            uint id= imageList.length;
            string memory update;
            address owner = msg.sender;
            imageList.push(Image(id,_image, _description,update, owner));
            return ("Bild erfasst");
            }
            if (checkImage(_image)==false){
                return ("Bild nicht erfasst");
            }
    }
    
    function checkImage(string memory _image) public view returns (bool ok){
        ok = false;
        bytes memory byteString = bytes(_image);
        for (uint i = 0; i <= imageList.length; i++){
            bytes memory byteImage = bytes(imageList[i].image);
            for (uint j = 0; j <= byteString.length; j++){
                if (byteString[j] != byteImage[j]){
                    return true;
                }
            }    
        }
    }
    
    function addImageinital(string memory _image,  string memory _description) public{
        //check if image exists
            uint id= imageList.length;
            string memory update;
            address owner = msg.sender;
            imageList.push(Image(id,_image, _description, update, owner));
    }
    
    function listImage() public view returns (Image[] memory){
        return imageList;
    }
    
    function getImage(uint id) public view returns (string memory output){
        string memory ids = uint2str(id);
        string memory out = append9("Bild ",ids,": ", " Hash: ",imageList[id].image, " Description: ",imageList[id].description," Owner: ",ownerList[imageList[id].Besitzer].name);
       return out;
   }
    function getImageDesc(uint id) public view returns (string memory description){
       return (imageList[id].description);
    }
    function getImageOwner(uint id) public view returns (address owner){
        return (imageList[id].Besitzer);
    }
    function getImageHash(uint id) public view returns (string memory hash){
        return (imageList[id].image);
    }
    function getImageCount() public view returns (uint count){
        return imageList.length;
    }
    function getOwnerName(uint id) public view returns (string memory Name){
        return ownerList[imageList[id].Besitzer].name;
    }
    function getOwnerMail(uint id) public view returns (string memory Mail){
        return ownerList[imageList[id].Besitzer].mail;
    }
    
    //function getImageFromOwner() public view returns (Image memory){
      //  for (uint i = 0; i <= imageList.length; i++){
        //    require(imageList[i].Besitzer == msg.sender);
          //  return imageList[i];
        //}
    //}
    
    function updateImage(uint id,string memory _newhash, string memory update) public {
       imageList[id].image = _newhash;
       imageList[id].update = append(imageList[id].update,", ", update);
    }
    
    function showUpdates(uint id) public view returns(string memory){
        return imageList[id].update;
    }
    function append(string memory a, string memory b, string memory c) internal pure returns (string memory) {
    return string(abi.encodePacked(a, b, c));
    }
    function append9(string memory a, string memory b, string memory c, string memory d, string memory e, string memory f, string memory g, string memory h, string memory i) internal pure returns (string memory) {
    return string(abi.encodePacked(a, b, c, d, e, f, g, h, i));
    }
    
    //Owner---------------------------------------------------------------
    function registOwner(string memory _name,  string memory _mail) public{
        ownerCount ++;
        address owner = msg.sender;
        bool isUser = true;
        ownerList[owner] = Owner(_name, _mail, isUser);
    }
    
    
    function checkOwner() public view returns (bool ok){
       if (ownerList[msg.sender].isUser == false){
            return false;
        }
        return true;
        
    }
    function showOwner() public view returns (string memory name, string memory mail){
        if (checkOwner()){
            return (ownerList[msg.sender].name , ownerList[msg.sender].mail);
        }
        else {
            return ("nicht erfasst", "nicht erfasst");
        }
    } 
    //Misc---------------------------------------------------------------------
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
    if (_i == 0) {
        return "0";
    }
    uint j = _i;
    uint len;
    while (j != 0) {
        len++;
        j /= 10;
    }
    bytes memory bstr = new bytes(len);
    uint k = len - 1;
    while (_i != 0) {
        bstr[k--] = byte(uint8(48 + _i % 10));
        _i /= 10;
    }
    return string(bstr);
}
    
    }