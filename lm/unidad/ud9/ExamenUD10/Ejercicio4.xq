(:4. Obtener (usando let) el número total de modelos diferentes ofertados y el coste total de comprar dos unidades de
cada uno de ellos.:)
<ejercicio>
<identificativo>
<nombre>Jose Luis</nombre>
<apellidos>Perez Lara</apellidos>
<fecha>20/05/2022</fecha>
</identificativo>
<resultado>
{
let $num_total_modelos := count(salon/vehiculos/vehiculo/modelo),
    $coste_total := sum(salon/vehiculos/vehiculo/precio)*2
return <vehiculo><num_modelos>{$num_total_modelos}</num_modelos>
<coste_total_dos_de_cada>{$coste_total}</coste_total_dos_de_cada>
</vehiculo>
}
</resultado>
</ejercicio>