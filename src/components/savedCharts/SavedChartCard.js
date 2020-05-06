import React , {useContext} from "react"
import  "./savedCharts.css"
import feelingheart from "../auth/feelingheart.png"
import { Button} from "reactstrap"
import { SavedChartImageContext } from "../savedCharts/SavedChartImageProvider"
import { SavedChartPreview } from "./SavedChartPreview"
import { format, fromUnixTime } from 'date-fns'
import { SavedChartContext } from "./SavedChartProvider"



export const SavedChartCard = ({foundSavedChart}) => {
    const { savedChartImages } = useContext(SavedChartImageContext)
    const { deleteSavedChart } = useContext(SavedChartContext)
    const foundSavedChartImages = savedChartImages.filter(savedChartImage=>savedChartImage.savedChartId === foundSavedChart.id)
    const readableDate = () => format(fromUnixTime(Math.floor(foundSavedChart.timestamp/1000)), "MM/dd/yyyy")
  
  
    if (foundSavedChart.hasOwnProperty("name")) {
        return (
            <section className="savedChartCard">
                <h3 className="savedChartCard__name">{foundSavedChart.name}</h3>
                <div className="savedChartCard__date">{readableDate()}</div>
                <div className="savedChartPreview">
                    {
                foundSavedChartImages.map(fSCI => { 
                return  <SavedChartPreview key={fSCI.id} 
                             fSCI={fSCI} /> })
            }
                </div>
                <div className="savedChartCard__buttons">
                    <Button onClick={() => deleteSavedChart(foundSavedChart.id)}>Delete</Button> 
                    <Button>Edit</Button>
                </div>
            </section>
        )
        } else {
        return (
            <section className="savedChartCard">
                <h3 className="savedChartCard__name">Sarah's Chart</h3>
                <div className="savedChartCard__date">4/21/2020</div>
                <div className="savedChartCard__savedChartPreview"> <img class="feelingHeart_img" src={feelingheart} /></div>
            </section>
      )
    }
}
