import { MapsComponent, LayersDirective, LayerDirective, Legend ,DataLabel,MapsTooltip,Bubble , BubblesDirective, BubbleDirective, Inject} from '@syncfusion/ej2-react-maps';
import { world_map } from './world_map'

import './App.css';

let bubbleData: object[] = [
  { CountryName:"China", Value:26.069578973425973, Color:"#7F38A0", Population:746662194 },
  { CountryName:"India", Value:18.89685398845257, Color:"#7F38A0", Population:391292635 },
  { CountryName:"United States", Value:14.990417962652455, Color:"#99295D", Population:245436423 },
  { CountryName:"Brazil", Value:10.697262204318639, Color:"#364A98", Population:123927230 },
  { CountryName:"Japan", Value:10.422287570687047, Color:"#7F38A0 ", Population:117528631 },
  { CountryName:"Russia", Value:10.089306526634514, Color:"#2E769F", Population:110003284 },
  { CountryName:"Mexico", Value:8.418801064678872, Color:"#99295D ", Population:75937568 },
  { CountryName:"United Kingdom", Value:7.651679331043155, Color:"#2E769F", Population:62354410 },
  { CountryName:"South Africa", Value:6.6856680708458756, Color:"#816F28", Population:47094267 },
  { CountryName:"Egypt", Value:6.000680715088463, Color:"#816F28", Population:37519531 }
  ];
  
function App() {
  return (
    <div className="App">
      <MapsComponent titleSettings={{ text: '10 countries with the most internet users'}}>
      <Inject services={[Bubble,MapsTooltip]}/>
        <LayersDirective>
          <LayerDirective shapeData={world_map}
          shapePropertyPath='name' shapeDataPath='CountryName'
          shapeSettings={ {
          fill: '#E5E5E5'
          }}
          >
          <BubblesDirective>
            <BubbleDirective visible={true}
            dataSource={bubbleData} valuePath='Value' bubbleType='Circle'
            //fill="#37AFAB"
            animationDuration={500}
            minRadius={3} maxRadius={15}
            colorValuePath='Color' 
            tooltipSettings={{
              visible: true,
              valuePath: 'Value',
              format: 'Internet Users in ${CountryName} <br> ${Value} '
          }}
            ></BubbleDirective>
             {/* <BubbleDirective visible={true}
            dataSource={bubbleData} valuePath='Population'
            minRadius={7} maxRadius={25} opacity={0.4} 
            colorValuePath='Color'></BubbleDirective> */}
          </BubblesDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
    </div>
  );
}

export default App;
