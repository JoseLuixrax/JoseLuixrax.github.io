(:9. Obtener la media de los precios de todas los demostraciones, la suma de los precios de los demostraciones del
circuito 3 y el total de plazas que se ofertan en los dos "Rallye".:)
<ejercicio>
<identificativo>
<nombre>Jose Luis</nombre>
<apellidos>Perez Lara</apellidos>
<fecha>20/05/2022</fecha>
</identificativo>
<resultado>
{
for $demos in salon/demostraciones
let $media_precio:= sum($demos/prueba/precio) div count($demos/prueba/nombre),
$suma_precio_circuito3:= sum(salon/demostraciones/prueba[circuito = "3"]/precio)
return <demostraciones>
<media_precios_total>{$media_precio}</media_precios_total>
<suma_precio_circuito3>{$suma_precio_circuito3}</suma_precio_circuito3>
</demostraciones>
}
</resultado>
</ejercicio>