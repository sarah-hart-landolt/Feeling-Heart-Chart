import React from "react"
import  "./savedCharts.css"
import feelingheart from "../auth/feelingheart.png"
import { Button} from "reactstrap"

export default () => (
    <section className="savedChartCard">
        <h3 className="savedChartCard__name">Sarah's Chart</h3>
        <div className="savedChartCard__date">4/21/2020</div>
        <div className="savedChartCard__savedChartPreview"> <img class="feelingHeart_img" src={feelingheart} /></div>
        <div className="savedChartCard__buttons">
            <Button>Delete</Button>
            <Button>Edit</Button>
        </div>
    </section>
)