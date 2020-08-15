import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = props => {
    return (
        <div>



      <div className="left-content">
        <div className="mother-grid-inner">
        
          
          {/*//four-grids here*/}
          {/*agileinfo-grap*/}
          <div className="agileinfo-grap">
            <div className="agileits-box">
              <header className="agileits-box-header clearfix">
                <h3>Statistics</h3>
                <div className="toolbar">
                  <div className="pull-left">
                    <div className="btn-group">
                      <a href="#" className="btn btn-default btn-xs">Daily</a>
                      <a href="#" className="btn btn-default btn-xs active">Monthly</a>
                      <a href="#" className="btn btn-default btn-xs">Yearly</a>
                    </div>
                  </div>
                  <div className="pull-right">
                    <div className="btn-group">
                      <a aria-expanded="false" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                        Export <i className="fa fa-angle-down" />
                      </a>
                      <ul className="dropdown-menu pull-right" role="menu">
                        <li><a href="#">Export as PDF</a></li>
                        <li><a href="#">Export as CSV</a></li>
                        <li><a href="#">Export as PNG</a></li>
                        <li className="divider" />
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-cog" /></a>
                  </div>
                </div>
              </header>
              <div className="agileits-box-body clearfix">
                <div id="hero-area" style={{position: 'relative', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}><svg height={348} version="1.1" width={1171} xmlns="http://www.w3.org/2000/svg" style={{overflow: 'hidden', position: 'relative', left: '-0.53125px', top: '-0.59375px'}}><desc style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>Created with Raphaël 2.0.1</desc><defs style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="42.046875" y={330} textAnchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>0</tspan></text><path fill="none" stroke="#dddddd" d="M47.046875,330H1161" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="42.046875" y={250} textAnchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>5,000</tspan></text><path fill="none" stroke="#dddddd" d="M47.046875,250H1161" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="42.046875" y={170} textAnchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>10,000</tspan></text><path fill="none" stroke="#dddddd" d="M47.046875,170H1161" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="42.046875" y={90} textAnchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>15,000</tspan></text><path fill="none" stroke="#dddddd" d="M47.046875,90H1161" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="42.046875" y={10} textAnchor="end" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>20,000</tspan></text><path fill="none" stroke="#dddddd" d="M47.046875,10H1161" strokeWidth="0.5" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><text x="1119.040647782503" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2016-05</tspan></text><text x="1036.4754708383962" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2016-03</tspan></text><text x="955.2638213851761" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2016-01</tspan></text><text x="872.6986444410692" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2015-11</tspan></text><text x="790.1334674969623" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2015-09</tspan></text><text x="706.2147630619684" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2015-07</tspan></text><text x="623.6495861178614" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2015-05</tspan></text><text x="541.0844091737545" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2015-03</tspan></text><text x="461.2262872114216" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2015-01</tspan></text><text x="378.6611102673147" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2014-11</tspan></text><text x="296.09593332320776" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2014-09</tspan></text><text x="212.17722888821385" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2014-07</tspan></text><text x="129.61205194410692" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2014-05</tspan></text><text x="47.046875" y={335} textAnchor="middle" font="10px &quot;Arial&quot;" stroke="none" fill="#888888" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', font: '12px sans-serif'}} fontSize="12px" fontFamily="sans-serif" fontWeight="normal" transform="matrix(1,0,0,1,0,7)"><tspan dy={4} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>2014-03</tspan></text><path fill="#f88d89" stroke="none" d="M47.046875,287.312C78.17800729040097,234.864,140.44027187120292,98.02399999999999,171.57140416160388,77.51999999999998C202.70253645200484,57.01599999999998,264.9648010328068,109.18338797814208,296.09593332320776,123.28C326.88868374088696,137.22338797814209,388.4741845762454,185.4567955801105,419.2669349939246,189.68C449.72130353888207,193.85679558011051,510.630040628797,158.68,541.0844091737545,156.88C572.2155414641554,155.04,634.4778060449574,163.14000000000001,665.6089383353584,175.12C696.7400706257594,187.1,759.0023352065614,263.58504918032787,790.1334674969623,252.72C820.9262179146415,241.97304918032788,882.51171875,100.40599999999999,913.3044691676791,88.672C944.0972195853584,76.93799999999999,1005.6827204207169,145.63857923497264,1036.4754708383962,158.84799999999998C1067.6066031287971,172.20257923497266,1129.868867709599,185.908,1161,194.928L1161,330L47.046875,330Z" fillOpacity="0.85" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: '0.85'}} /><path fill="none" stroke="#ff4a43" d="M47.046875,287.312C78.17800729040097,234.864,140.44027187120292,98.02399999999999,171.57140416160388,77.51999999999998C202.70253645200484,57.01599999999998,264.9648010328068,109.18338797814208,296.09593332320776,123.28C326.88868374088696,137.22338797814209,388.4741845762454,185.4567955801105,419.2669349939246,189.68C449.72130353888207,193.85679558011051,510.630040628797,158.68,541.0844091737545,156.88C572.2155414641554,155.04,634.4778060449574,163.14000000000001,665.6089383353584,175.12C696.7400706257594,187.1,759.0023352065614,263.58504918032787,790.1334674969623,252.72C820.9262179146415,241.97304918032788,882.51171875,100.40599999999999,913.3044691676791,88.672C944.0972195853584,76.93799999999999,1005.6827204207169,145.63857923497264,1036.4754708383962,158.84799999999998C1067.6066031287971,172.20257923497266,1129.868867709599,185.908,1161,194.928" strokeWidth={0} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="47.046875" cy="287.312" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="171.57140416160388" cy="77.51999999999998" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="296.09593332320776" cy="123.28" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="419.2669349939246" cy="189.68" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="541.0844091737545" cy="156.88" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="665.6089383353584" cy="175.12" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="790.1334674969623" cy="252.72" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="913.3044691676791" cy="88.672" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="1036.4754708383962" cy="158.84799999999998" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx={1161} cy="194.928" r={2} fill="#ff4a43" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><path fill="#bbef0c" stroke="none" d="M47.046875,330C78.17800729040097,274.804,140.44027187120292,131.166,171.57140416160388,109.21600000000001C202.70253645200484,87.266,264.9648010328068,139.9233224043716,296.09593332320776,154.4C326.88868374088696,168.71932240437158,388.4741845762454,224.29743646408838,419.2669349939246,224.39999999999998C449.72130353888207,224.50143646408839,510.630040628797,159.98303296703298,541.0844091737545,155.216C572.2155414641554,150.34303296703297,634.4778060449574,171.602,665.6089383353584,185.84C696.7400706257594,200.078,759.0023352065614,269.0536393442623,790.1334674969623,269.12C820.9262179146415,269.1856393442623,882.51171875,187.69799999999998,913.3044691676791,186.368C944.0972195853584,185.03799999999998,1005.6827204207169,252.00756284153007,1036.4754708383962,258.48C1067.6066031287971,265.02356284153007,1129.868867709599,243.44400000000002,1161,238.43200000000002L1161,330L47.046875,330Z" fillOpacity="0.85" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: '0.85'}} /><path fill="none" stroke="#a2d200" d="M47.046875,330C78.17800729040097,274.804,140.44027187120292,131.166,171.57140416160388,109.21600000000001C202.70253645200484,87.266,264.9648010328068,139.9233224043716,296.09593332320776,154.4C326.88868374088696,168.71932240437158,388.4741845762454,224.29743646408838,419.2669349939246,224.39999999999998C449.72130353888207,224.50143646408839,510.630040628797,159.98303296703298,541.0844091737545,155.216C572.2155414641554,150.34303296703297,634.4778060449574,171.602,665.6089383353584,185.84C696.7400706257594,200.078,759.0023352065614,269.0536393442623,790.1334674969623,269.12C820.9262179146415,269.1856393442623,882.51171875,187.69799999999998,913.3044691676791,186.368C944.0972195853584,185.03799999999998,1005.6827204207169,252.00756284153007,1036.4754708383962,258.48C1067.6066031287971,265.02356284153007,1129.868867709599,243.44400000000002,1161,238.43200000000002" strokeWidth={0} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="47.046875" cy={330} r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="171.57140416160388" cy="109.21600000000001" r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="296.09593332320776" cy="154.4" r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="419.2669349939246" cy="224.39999999999998" r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="541.0844091737545" cy="155.216" r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="665.6089383353584" cy="185.84" r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="790.1334674969623" cy="269.12" r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="913.3044691676791" cy="186.368" r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="1036.4754708383962" cy="258.48" r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx={1161} cy="238.43200000000002" r={2} fill="#a2d200" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><path fill="#5cc8ea" stroke="none" d="M47.046875,287.616C78.17800729040097,250.00799999999998,140.44027187120292,151.706,171.57140416160388,137.184C202.70253645200484,122.662,264.9648010328068,160.66946448087432,296.09593332320776,171.44C326.88868374088696,182.0934644808743,388.4741845762454,227.686408839779,419.2669349939246,222.88C449.72130353888207,218.126408839779,510.630040628797,135.56571428571428,541.0844091737545,133.2C572.2155414641554,130.7817142857143,634.4778060449574,182.34,665.6089383353584,203.744C696.7400706257594,225.148,759.0023352065614,298.9904262295082,790.1334674969623,304.432C820.9262179146415,309.81442622950823,882.51171875,247.92,913.3044691676791,247.04C944.0972195853584,246.16,1005.6827204207169,290.66098360655735,1036.4754708383962,297.392C1067.6066031287971,304.19698360655735,1129.868867709599,300.236,1161,301.184L1161,330L47.046875,330Z" fillOpacity="0.85" style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: '0.85'}} /><path fill="none" stroke="#22beef" d="M47.046875,287.616C78.17800729040097,250.00799999999998,140.44027187120292,151.706,171.57140416160388,137.184C202.70253645200484,122.662,264.9648010328068,160.66946448087432,296.09593332320776,171.44C326.88868374088696,182.0934644808743,388.4741845762454,227.686408839779,419.2669349939246,222.88C449.72130353888207,218.126408839779,510.630040628797,135.56571428571428,541.0844091737545,133.2C572.2155414641554,130.7817142857143,634.4778060449574,182.34,665.6089383353584,203.744C696.7400706257594,225.148,759.0023352065614,298.9904262295082,790.1334674969623,304.432C820.9262179146415,309.81442622950823,882.51171875,247.92,913.3044691676791,247.04C944.0972195853584,246.16,1005.6827204207169,290.66098360655735,1036.4754708383962,297.392C1067.6066031287971,304.19698360655735,1129.868867709599,300.236,1161,301.184" strokeWidth={0} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="47.046875" cy="287.616" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="171.57140416160388" cy="137.184" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="296.09593332320776" cy="171.44" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="419.2669349939246" cy="222.88" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="541.0844091737545" cy="133.2" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="665.6089383353584" cy="203.744" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="790.1334674969623" cy="304.432" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="913.3044691676791" cy="247.04" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx="1036.4754708383962" cy="297.392" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /><circle cx={1161} cy="301.184" r={2} fill="#22beef" stroke="#ffffff" strokeWidth={1} style={{WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}} /></svg><div className="morris-hover morris-default-style" style={{left: '345.767px', top: '120px', display: 'none'}}><div className="morris-hover-row-label">2014 Q4</div><div className="morris-hover-point" style={{color: '#ff4a43'}}>
                      All Visitors:
                      8,770
                    </div><div className="morris-hover-point" style={{color: '#a2d200'}}>
                      Returning Visitors:
                      6,600
                    </div><div className="morris-hover-point" style={{color: '#22beef'}}>
                      Unique Visitors:
                      6,695
                    </div></div></div>
              </div>
            </div>
          </div>
          {/*//agileinfo-grap*/}
          {/*photoday-section*/}	
          <div className="col-sm-4 wthree-crd">
            <div className="card">
              <div className="card-body">
                <div className="widget widget-report-table">
                  <header className="widget-header m-b-15">
                  </header>
                  <div className="row m-0 md-bg-grey-100 p-l-20 p-r-20">
                    <div className="col-md-6 col-sm-6 col-xs-6 w3layouts-aug">
                      <h3>August 2016</h3>
                      <p>REPORT</p>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 ">
                      <h2 className="text-right c-teal f-300 m-t-20">$21,235</h2>
                    </div>
                  </div>
                  <div className="widget-body p-15">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2356</td>
                          <td>dummy text </td>
                          <td>6,200.00</td>
                        </tr>
                        <tr>
                          <td>4589</td>
                          <td>Lorem Ipsum</td>
                          <td>6,500.00</td>
                        </tr>
                        <tr>
                          <td>3269</td>
                          <td>specimen book</td>
                          <td>6,800.00</td>
                        </tr>                                                    
                        <tr>
                          <td>5126</td>
                          <td>Letraset sheets</td>
                          <td>7,200.00</td>
                        </tr>
                        <tr>
                          <td>7425</td>
                          <td>PageMaker</td>
                          <td>5,900.00</td>
                        </tr>
                      </tbody>
                    </table>    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 w3-agileits-crd">
            <div className="card card-contact-list">
              <div className="agileinfo-cdr">
                <div className="card-header">
                  <h3>Contacts</h3>
                </div>
                <div className="card-body p-b-20">
                  <div className="list-group">
                    <a className="list-group-item media" href>
                      <div className="pull-left">
                        <img className="lg-item-img" src="assets/css/admin/images/in1.jpg" alt="" />
                      </div>
                      <div className="media-body">
                        <div className="pull-left">
                          <div className="lg-item-heading">Lorem</div>
                          <small className="lg-item-text">lorem@gmail.com</small>
                        </div>
                        <div className="pull-right">
                          <div className="lg-item-heading">Ceo</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item media" href>
                      <div className="pull-left">
                        <img className="lg-item-img" src="assets/css/admin/images/in2.jpg" alt="" />
                      </div>
                      <div className="media-body">
                        <div className="pull-left">
                          <div className="lg-item-heading">Ipsum</div>
                          <small className="lg-item-text">ipsum@hotmail.com</small>
                        </div>
                        <div className="pull-right">
                          <div className="lg-item-heading">Director</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item media" href>
                      <div className="pull-left">
                        <img className="lg-item-img" src="assets/css/admin/images/in3.jpg" alt="" />
                      </div>
                      <div className="media-body">
                        <div className="pull-left">
                          <div className="lg-item-heading">Unknown</div>
                          <small className="lg-item-text">unknown@gmail.com</small>
                        </div>
                        <div className="pull-right">
                          <div className="lg-item-heading">Manager</div>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item media" href>
                      <div className="pull-left">
                        <img className="lg-item-img" src="assets/css/admin/images/in4.jpg" alt="" />
                      </div>
                      <div className="media-body">
                        <div className="pull-left">
                          <div className="lg-item-heading">Specimen</div>
                          <small className="lg-item-text">specimen@hotmail.com</small>
                        </div>
                        <div className="pull-right">
                          <div className="lg-item-heading">Assistan</div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 w3-agile-crd">
            <div className="card">
              <div className="card-body card-padding">
                <div className="widget">
                  <header className="widget-header">
                    <h4 className="widget-title">Activities</h4>
                  </header>
                  <hr className="widget-separator" />
                  <div className="widget-body">
                    <div className="streamline">
                      <div className="sl-item sl-primary">
                        <div className="sl-content">
                          <small className="text-muted">5 mins ago</small>
                          <p>Williams has just joined Project X</p>
                        </div>
                      </div>
                      <div className="sl-item sl-danger">
                        <div className="sl-content">
                          <small className="text-muted">25 mins ago</small>
                          <p>Jane has sent a request for access</p>
                        </div>
                      </div>
                      <div className="sl-item sl-success">
                        <div className="sl-content">
                          <small className="text-muted">40 mins ago</small>
                          <p>Kate added you to her team</p>
                        </div>
                      </div>
                      <div className="sl-item">
                        <div className="sl-content">
                          <small className="text-muted">45 minutes ago</small>
                          <p>John has finished his task</p>
                        </div>
                      </div>
                      <div className="sl-item sl-warning">
                        <div className="sl-content">
                          <small className="text-muted">55 mins ago</small>
                          <p>Jim shared a folder with you</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/*//photoday-section*/}	
          {/*w3-agileits-pane*/}	
          <div className="w3-agileits-pane">
            <div className="col-md-4 wthree-pan">
              <div className="panel panel-default">
                <div className="panel-heading"> <i className="fa fa-bell fa-fw" /> Notifications Panel </div>
                {/* /.panel-heading */}
                <div className="panel-body">
                  <div className="list-group"> 
                    <a href="#" className="list-group-item"> <i className="fa fa-comment fa-fw" /> New Comment <span className="pull-right text-muted small"><em>4 minutes ago</em> </span> </a> 
                    <a href="#" className="list-group-item"> <i className="fa fa-twitter fa-fw" /> 3 New Followers <span className="pull-right text-muted small"><em>12 minutes ago</em> </span> </a> 
                    <a href="#" className="list-group-item"> <i className="fa fa-envelope fa-fw" /> Message Sent <span className="pull-right text-muted small"><em>27 minutes ago</em> </span> </a> 
                    <a href="#" className="list-group-item"> <i className="fa fa-tasks fa-fw" /> New Task <span className="pull-right text-muted small"><em>43 minutes ago</em> </span> </a> 
                    <a href="#" className="list-group-item"> <i className="fa fa-upload fa-fw" /> Server Rebooted <span className="pull-right text-muted small"><em>11:32 AM</em> </span> </a>
                    <a href="#" className="list-group-item"> <i className="fa fa-bolt fa-fw" /> Server Crashed! <span className="pull-right text-muted small"><em>11:13 AM</em> </span> </a> 
                    <a href="#" className="list-group-item"> <i className="fa fa-tasks fa-fw" /> New Task <span className="pull-right text-muted small"><em>43 minutes ago</em> </span> </a> 
                  </div>
                  {/* /.list-group */} 
                </div>
                {/* /.panel-body */} 
              </div>
            </div>
            <div className="col-md-8 agile-info-stat">
              <div className="stats-info stats-last widget-shadow">
                <table className="table stats-table ">
                  <thead>
                    <tr>
                      <th>S.NO</th>
                      <th>PRODUCT</th>
                      <th>STATUS</th>
                      <th>PROGRESS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Lorem ipsum</td>
                      <td><span className="label label-success">In progress</span></td>
                      <td><h5>85% <i className="fa fa-level-up" /></h5></td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Aliquam</td>
                      <td><span className="label label-warning">New</span></td>
                      <td><h5>35% <i className="fa fa-level-up" /></h5></td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Lorem ipsum</td>
                      <td><span className="label label-danger">Overdue</span></td>
                      <td><h5 className="down">40% <i className="fa fa-level-down" /></h5></td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Aliquam</td>
                      <td><span className="label label-info">Out of stock</span></td>
                      <td><h5>100% <i className="fa fa-level-up" /></h5></td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Lorem ipsum</td>
                      <td><span className="label label-success">In progress</span></td>
                      <td><h5 className="down">10% <i className="fa fa-level-down" /></h5></td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Aliquam</td>
                      <td><span className="label label-warning">New</span></td>
                      <td><h5>38% <i className="fa fa-level-up" /></h5></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          {/*//w3-agileits-pane*/}	
          {/* script-for sticky-nav */}
          {/* /script-for sticky-nav */}
          {/*inner block start here*/}
          <div className="inner-block">
          </div>
          {/*inner block end here*/}
          {/*copy rights start here*/}
          
          {/*COPY rights end here*/}
        </div>
     
  </div>
   </div>
        
    )
}

Dashboard.propTypes = {

}

export default Dashboard
