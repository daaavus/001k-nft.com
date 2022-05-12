import "./Tokenomics.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React, { useRef, useLayoutEffect } from 'react';

am4core.useTheme(am4themes_animated);

export default function Tokenomics() {

    const chart = useRef(null);

    useLayoutEffect(() => {
        let x = am4core.create("chartdiv", am4charts.PieChart3D);
        x.hiddenState.properties.opacity = 0;

        x.paddingRight = 20;

        let data = [
            {
                "country": "NFT без привелегий",
                "litres": 1000,
                "hidden": true
            }, {
                "country": "Подарочная NFT с автографом 001К",
                "litres": 68
            }, {
                "country": "Доступ в whitelist будущего NFT проекта",
                "litres": 20
            }, {
                "country": "Доступ в discord по трейдингу 001К",
                "litres": 10
            }, {
                "country": "доступ к Alpha",
                "litres": 10
            }, {
                "country": "Право на встречу с Сережей 001К",
                "litres": 3
            }
        ];

        x.data = data;

        x.innerRadius = am4core.percent(40);
        x.depth = 40;

        x.legend = new am4charts.Legend();
        x.legend.useDefaultMarker = true;
        let marker = x.legend.markers.template.children.getIndex(0);
        marker.cornerRadius(12, 12, 12, 12);
        marker.strokeWidth = 2;
        marker.strokeOpacity = 1;
        marker.stroke = am4core.color("#ccc");
        x.legend.labels.template.text = "Series: [bold {color}]{name}[/]";

        var series = x.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.depthValue = "litres";
        series.dataFields.category = "country";
        series.slices.template.propertyFields.fill = "color";
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
        series.labels.template.disabled = true;
        series.ticks.template.disabled = true;
        series.dataFields.hidden = "hidden";

        chart.current = x;

        return () => {
            x.dispose();
        };
    }, []);

    return (
        <div id="tokenomics" className="tokenomics">
            <h3 className="tokenomics__title">Токеномика</h3>
            <div className="tokenomics__chart" id="chartdiv"></div>
        </div>
    )
}
