(:8. Obtener los nombres de todos los pilotos (ordenados alfabéticamente), eliminando los repetidos e indicar todas las
demostraciones en las que participa.:)
<ejercicio>
<identificativo>
<nombre>Jose Luis</nombre>
<apellidos>Perez Lara</apellidos>
<fecha>20/05/2022</fecha>
</identificativo>
<resultado>
{
  for $demos in salon/demostraciones/prueba
  let $piloto:=distinct-values($demos/piloto)
  order by $demos/piloto
  return 
  <demostraciones>
  <piloto>{$piloto}</piloto>
  <aparece>{distinct-values($demos[piloto=$piloto]/nombre)}</aparece>
  </demostraciones>
}
</resultado>
</ejercicio>