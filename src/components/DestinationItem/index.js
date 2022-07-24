import './index.css'

const DestinationItem = props => {
  const {destinationItemsData} = props
  const {imgUrl, name} = destinationItemsData

  return (
    <li className="each-destination-container">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="nameEle">{name}</p>
    </li>
  )
}
/*
Page should consist of HTML image elements with alt attribute value as 
"{name}" and src attribute value as the value of the key "imgUrl" from 
destinationsList provided


Page should consist of HTML paragraph elements with text content 
as the value of the key "name" from destinationsList provided 

*/
export default DestinationItem
