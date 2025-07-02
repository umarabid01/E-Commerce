import React from "react";
import Card from "../../components/User/Card";

function Home() {
  return (
    <div class="bg-dark">
      
      <div class="container-fluid my-5 bg-dark">
        <div class="row">
           
          <div class="col mx-4">
            <Card title="Laptop" text="This is Dell Laptop" price="Price:1000RS" imgsrc="img\laptop.jpeg" />
          </div>
          <div class="col">
            <Card title="Mouse" text="This is Gaming Mouse"price="Price:1000RS" imgsrc="img\mouse.jpeg" />
          </div>
          <div class="col">
            <Card title="Keyboard" text="RGB keyboard" price="Price:1000RS"imgsrc="img\keyboard.jpeg" />
          </div>
          <div class="col">
            <Card title="Airpods" text="Bass sound" price="Price:1000RS"imgsrc="img\airpods.jpeg" />
          </div>
          <div class="col">
            <Card title="Powerbank" text="1000mah long last" price="Price:1000RS"imgsrc="img\powerbank.jpeg" />
          </div>
          
        
        </div>
      </div>
      <div class="container-fluid my-5 bg-dark" >
        <div class="row">
           
          <div class="col mx-4">
            <Card title="p1" text="details" price="Price:1000RS"imgsrc="img\mouse.jpeg" />
          </div>
          <div class="col">
            <Card title="p1" text="details" price="Price:1000RS"imgsrc="img\powerbank.jpeg" />
          </div>
          <div class="col">
            <Card title="p1" text="details" price="Price:1000RS"imgsrc="img\laptop.jpeg" />
          </div>
          <div class="col">
            <Card title="p1" text="details" price="Price:1000RS"imgsrc="img\keyboard.jpeg" />
          </div>
          <div class="col">
            <Card title="p1" text="details" price="Price:1000RS"imgsrc="img\airpods.jpeg" />
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default Home;
