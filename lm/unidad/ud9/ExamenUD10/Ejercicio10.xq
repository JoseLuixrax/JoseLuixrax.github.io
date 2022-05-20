(:10. Obtener el nombre de la prueba, su precio y el precio con un descuento del 25% para empleados del sector.
Ordenar por el nombre de la prueba desde el texto más largo hasta el más corto.:)
<ejercicio>
<identificativo>
<nombre>Jose Luis</nombre>
<apellidos>Perez Lara</apellidos>
<fecha>20/05/2022</fecha>
</identificativo>
<resultado>
{
  for $pruebas in salon/demostraciones/prueba
  order by string-length($pruebas/nombre) descending
  return <prueba>
  <nombre>{$pruebas/nombre}</nombre>
  <precio>{$pruebas/precio}</precio>
  <precioempleados>{$pruebas/precio*0.75}</precioempleados>
  </prueba>
}
</resultado>
</ejercicio>