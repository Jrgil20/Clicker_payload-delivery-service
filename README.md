# Clicker Payload Delivery Service 🎯

⚠️ **DISCLAIMER EDUCATIVO** ⚠️

Este repositorio contiene una **Prueba de Concepto (PoC)** educativa que demuestra cómo el malware puede ser entregado mediante técnicas de **ingeniería social**. El software se presenta como un juego tipo "Clicker" inocuo con temática de hacking.

## 🎮 Descripción

**H4CK3R CLICKER** es una aplicación web interactiva que simula un juego de clicker con estética de terminal hacker. Al alcanzar 100 clicks, el usuario recibe una "recompensa" en forma de un archivo ejecutable llamado `not-a-virus-trust-me.exe`.

### Características:

- ✨ **Interfaz atractiva** con temática de hacking (estilo Matrix/terminal)
- 🎯 **Sistema de progresión** con niveles de acceso (GUEST → USER → ADMIN → ROOT)
- 💻 **Consola interactiva** con mensajes de "hacking" realistas
- 📥 **Descarga de archivo** al completar 100 clicks
- ⚠️ **Múltiples advertencias** en texto pequeño sobre los riesgos
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
5. Podrás descargar el archivo `not-a-virus-trust-me.exe`

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
- ❌ **NUNCA ejecutes archivos de fuentes no confiables**
- ❌ **Verifica siempre la legitimidad** de los sitios web
- ❌ **Desconfía de "recompensas" o "premios"** inesperados
- ❌ **No desactives tu antivirus** por solicitud de aplicaciones
- ✅ **Usa sandboxes** para probar archivos sospechosos
- ✅ **Mantén actualizado** tu software de seguridad

### Para Desarrolladores:
- Este código es **solo para fines educativos**
- **NO** debe usarse para distribuir malware real
- **NO** debe modificarse para fines maliciosos
- Usar este concepto para dañar sistemas es **ilegal**

## 🔒 Contenido del Archivo Descargado

El archivo `not-a-virus-trust-me.exe` es un **archivo de texto** que contiene:
- Información educativa sobre el PoC
- Explicación de técnicas de ingeniería social
- Lista de indicadores de amenazas
- Consejos de protección
- **NO contiene código malicioso real**

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
- Distribución directa de "ejecutables"
- Requiere interacción del usuario (no drive-by)
- Simula herramientas legítimas

## 📚 Recursos Educativos

Para aprender más sobre seguridad cibernética:

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [MITRE ATT&CK Framework](https://attack.mitre.org/)
- [Social Engineering Toolkit](https://www.social-engineer.org/)
- [SANS Security Awareness](https://www.sans.org/security-awareness-training/)

## 🤝 Contribuciones

Este es un proyecto educativo. Si deseas contribuir:
- Mejoras en la documentación educativa
- Ejemplos adicionales de vectores de ataque
- Recursos de aprendizaje
- Traducciones

**NO** se aceptan contribuciones que:
- Añadan código malicioso real
- Oculten mejor las advertencias
- Hagan la aplicación más engañosa sin propósito educativo

## 📜 Licencia

Este proyecto es de código abierto con fines **exclusivamente educativos**. El uso de este código para actividades maliciosas es **ilegal** y está **estrictamente prohibido**.

## 👨‍💻 Autor

Creado como demostración educativa de técnicas de ingeniería social en ciberseguridad.

---

**Recuerda**: El objetivo de este proyecto es **educar y crear conciencia**, no enseñar a crear malware. La mejor defensa contra el malware es un usuario informado y cauteloso. 🛡️
