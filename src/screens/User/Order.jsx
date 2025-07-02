import React from 'react'
import Card4 from '../../components/User/Card4'

function Order(){
    return(
        <div>
        <h1>this is order</h1>
        <Card4 title="Mouse" text="This is Gaming Mouse"price="Price:1000RS" imgsrc="img\mouse.jpeg" />
        <Card4 title="Powerbank" text="good battery"price="Price:1000RS" imgsrc="img\powerbank.jpeg" />
        <Card4 title="Mouse" text="This is Gaming Mouse"price="Price:1000RS" imgsrc="img\mouse.jpeg" />
        <Card4 title="Powerbank" text="good battery"price="Price:1000RS" imgsrc="img\powerbank.jpeg" />
</div>
    )
}

export default Order

