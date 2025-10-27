module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nueva característica
        'fix',      // Corrección de bugs
        'content',  // Cambios de contenido
        'style',    // Cambios de estilo (CSS, formato)
        'refactor', // Refactorización de código
        'chore',    // Tareas de mantenimiento
        'docs',     // Documentación
        'test',     // Tests
        'ci',       // Configuración de CI
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100],
  },
};
