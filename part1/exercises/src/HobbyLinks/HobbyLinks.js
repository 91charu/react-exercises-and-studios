
import React from 'react';

export default function HobbyLinks () {
    
        const hobbyLinks= ["https://static.vecteezy.com/system/resources/previews/000/660/823/original/vector-dancing-party-group.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSH-c_ggElr-dGCXzqLVK7siwt4c2wLe9lYA&usqp=CAU"];
      return (
        
<div>
<h3> Hobbies </h3>
  <ul>
<li><a href = {hobbyLinks[0]}>Dancing</a></li>
<li><a href = {hobbyLinks[1]}>Singing</a></li>
</ul>
</div>
);
}
