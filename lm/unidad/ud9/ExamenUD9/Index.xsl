<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">
<html> 
<head>
<style>
table {
   border: 1px solid red;
}
tr {
   background-color: #4CAF50;
   text-align: left;
}
</style>
</head>
<body>
  <h2>Links a los horarios</h2>
  <xsl:for-each select="informatica/cursos/curso">
  <ul>
      <li>
        <a>
            <xsl:attribute name="href">
              <xsl:value-of select="@enlace"/>
            </xsl:attribute>
            <xsl:value-of select="@id"/>
        </a>
    </li>

  </ul>
  </xsl:for-each>

</body>
</html>
</xsl:template>
</xsl:stylesheet>
