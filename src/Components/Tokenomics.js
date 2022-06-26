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
                "litres": 1956,
                "hidden": true
            }, {
                "country": "Подарочная NFT с автографом 001К",
                "litres": 150
            }, {
                "country": "Доступ в whitelist будущего NFT проекта",
                "litres": 50
            }, {
                "country": "Доступ в discord по трейдингу 001К",
                "litres": 15
            }, {
                "country": "доступ к Alpha",
                "litres": 15
            }, {
                "country": "Обучение по трейдингу от 001K",
                "litres": 5
            }, {
                "country": "Отметка в сторис",
                "litres": 5
            }, {
                "country": "Право на встречу с Сережей 001К",
                "litres": 3
            }, {
                "country": "200$ в MATIC",
                "litres": 10
            }, {
                "country": "500$ в MATIC",
                "litres": 10
            }, {
                "country": "1000$ в MATIC",
                "litres": 3
            }
        ];

        x.data = data;

        x.innerRadius = am4core.percent(40);
        x.depth = 20;

        x.legend = new am4charts.Legend();
        x.legend.useDefaultMarker = true;

        let marker = x.legend.markers.template.children.getIndex(0);
        marker.cornerRadius(12, 12, 12, 12);
        marker.strokeWidth = 2;
        marker.strokeOpacity = 1;

        x.legend.labels.template.text = "[bold {color}]{name}[%]";

        var series = x.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "litres";
        series.dataFields.depthValue = "litres";
        series.dataFields.category = "country";
        series.slices.template.propertyFields.fill = am4core.color("#fff");
        series.slices.template.stroke = am4core.color("#fff");
        series.slices.template.cornerRadius = 5;
        series.colors.step = 3;
        series.labels.template.disabled = true;
        series.ticks.template.disabled = true;
        series.dataFields.hidden = "hidden";
        series.legendSettings.valueText = "";
        series.legendSettings.itemValueText = "";
        x.legend.valueLabels.template.disabled = true;

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
