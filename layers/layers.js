var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_GISGRPKawasanHutan_1 = new ol.format.GeoJSON();
var features_GISGRPKawasanHutan_1 = format_GISGRPKawasanHutan_1.readFeatures(json_GISGRPKawasanHutan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISGRPKawasanHutan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISGRPKawasanHutan_1.addFeatures(features_GISGRPKawasanHutan_1);
var lyr_GISGRPKawasanHutan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISGRPKawasanHutan_1, 
                style: style_GISGRPKawasanHutan_1,
                popuplayertitle: 'GIS GRP — Kawasan Hutan',
                interactive: true,
    title: 'GIS GRP — Kawasan Hutan<br />\
    <img src="styles/legend/GISGRPKawasanHutan_1_0.png" /> Areal Penggunaan Lain<br />\
    <img src="styles/legend/GISGRPKawasanHutan_1_1.png" /> Hutan  Lindung<br />\
    <img src="styles/legend/GISGRPKawasanHutan_1_2.png" /> Hutan Produksi<br />\
    <img src="styles/legend/GISGRPKawasanHutan_1_3.png" /> Hutan Produksi Konversi<br />\
    <img src="styles/legend/GISGRPKawasanHutan_1_4.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/GISGRPKawasanHutan_1_5.png" /> Kawasan Suaka Alam/Kawasan Pelestarian Alam<br />\
    <img src="styles/legend/GISGRPKawasanHutan_1_6.png" /> <br />' });
var format_GISGRPWIUPPTGemaRipahPratama_2 = new ol.format.GeoJSON();
var features_GISGRPWIUPPTGemaRipahPratama_2 = format_GISGRPWIUPPTGemaRipahPratama_2.readFeatures(json_GISGRPWIUPPTGemaRipahPratama_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GISGRPWIUPPTGemaRipahPratama_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GISGRPWIUPPTGemaRipahPratama_2.addFeatures(features_GISGRPWIUPPTGemaRipahPratama_2);
var lyr_GISGRPWIUPPTGemaRipahPratama_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GISGRPWIUPPTGemaRipahPratama_2, 
                style: style_GISGRPWIUPPTGemaRipahPratama_2,
                popuplayertitle: 'GIS GRP — WIUP PT Gema Ripah Pratama',
                interactive: true,
                title: '<img src="styles/legend/GISGRPWIUPPTGemaRipahPratama_2.png" /> GIS GRP — WIUP PT Gema Ripah Pratama'
            });
var format_BlokA_3 = new ol.format.GeoJSON();
var features_BlokA_3 = format_BlokA_3.readFeatures(json_BlokA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlokA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlokA_3.addFeatures(features_BlokA_3);
var lyr_BlokA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlokA_3, 
                style: style_BlokA_3,
                popuplayertitle: 'Blok A',
                interactive: true,
                title: '<img src="styles/legend/BlokA_3.png" /> Blok A'
            });
var format_PlanJalanHauling_4 = new ol.format.GeoJSON();
var features_PlanJalanHauling_4 = format_PlanJalanHauling_4.readFeatures(json_PlanJalanHauling_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanJalanHauling_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanJalanHauling_4.addFeatures(features_PlanJalanHauling_4);
var lyr_PlanJalanHauling_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanJalanHauling_4, 
                style: style_PlanJalanHauling_4,
                popuplayertitle: 'Plan Jalan Hauling',
                interactive: true,
    title: 'Plan Jalan Hauling<br />\
    <img src="styles/legend/PlanJalanHauling_4_0.png" /> Hauling EFO - Ujung Aspal<br />\
    <img src="styles/legend/PlanJalanHauling_4_1.png" /> Rencana bangun jalan<br />\
    <img src="styles/legend/PlanJalanHauling_4_2.png" /> Rute PBY<br />\
    <img src="styles/legend/PlanJalanHauling_4_3.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GISGRPKawasanHutan_1.setVisible(true);lyr_GISGRPWIUPPTGemaRipahPratama_2.setVisible(true);lyr_BlokA_3.setVisible(true);lyr_PlanJalanHauling_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GISGRPKawasanHutan_1,lyr_GISGRPWIUPPTGemaRipahPratama_2,lyr_BlokA_3,lyr_PlanJalanHauling_4];
lyr_GISGRPKawasanHutan_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KODEPROV': 'KODEPROV', 'FUNGSIKWS': 'FUNGSIKWS', 'NOSKPNJK': 'NOSKPNJK', 'TGLSKPNJK': 'TGLSKPNJK', 'LSKPNJK': 'LSKPNJK', 'KET': 'KET', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Label': 'Label', 'FUNGSI_KWS': 'FUNGSI_KWS', 'LEGENDA': 'LEGENDA', });
lyr_GISGRPWIUPPTGemaRipahPratama_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Luas': 'Luas', });
lyr_BlokA_3.set('fieldAliases', {'fid': 'fid', });
lyr_PlanJalanHauling_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Lenght (Km)': 'Lenght (Km)', 'Panjang': 'Panjang', 'Rute ': 'Rute ', });
lyr_GISGRPKawasanHutan_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'KODEPROV': '', 'FUNGSIKWS': '', 'NOSKPNJK': '', 'TGLSKPNJK': '', 'LSKPNJK': '', 'KET': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'Label': '', 'FUNGSI_KWS': '', 'LEGENDA': '', });
lyr_GISGRPWIUPPTGemaRipahPratama_2.set('fieldImages', {'fid': '', 'Name': '', 'Luas': '', });
lyr_BlokA_3.set('fieldImages', {'fid': '', });
lyr_PlanJalanHauling_4.set('fieldImages', {'fid': '', 'ID': '', 'Lenght (Km)': '', 'Panjang': '', 'Rute ': '', });
lyr_GISGRPKawasanHutan_1.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KODEPROV': 'hidden field', 'FUNGSIKWS': 'hidden field', 'NOSKPNJK': 'hidden field', 'TGLSKPNJK': 'hidden field', 'LSKPNJK': 'hidden field', 'KET': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Label': 'hidden field', 'FUNGSI_KWS': 'no label', 'LEGENDA': 'hidden field', });
lyr_GISGRPWIUPPTGemaRipahPratama_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Luas': 'no label', });
lyr_BlokA_3.set('fieldLabels', {'fid': 'no label', });
lyr_PlanJalanHauling_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'no label', 'Lenght (Km)': 'hidden field', 'Panjang': 'hidden field', 'Rute ': 'no label', });
lyr_PlanJalanHauling_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});