document.addEventListener('DOMContentLoaded', () => {
            // Función para generar los pétalos de los girasoles
            function crearPetalosGirasol(idGirasol) {
                const girasol = document.getElementById(idGirasol);
                for (let i = 0; i < 16; i++) {
                    let petalo = document.createElement('div');
                    petalo.classList.add('petalo-girasol');
                    petalo.style.transform = `rotate(${i * 22.5}deg)`;
                    girasol.appendChild(petalo);
                }
            }

            crearPetalosGirasol('girasol1');
            crearPetalosGirasol('girasol2');

            // Navegación
            const btnDescubrir = document.getElementById('btnDescubrir');
            const btnSobre = document.getElementById('btnSobre');
            const btnVolver = document.getElementById('btnVolver');
            const seccion1 = document.getElementById('seccion1');
            const seccion2 = document.getElementById('seccion2');
            const seccion3 = document.getElementById('seccion3');

            btnDescubrir.addEventListener('click', () => {
                seccion1.classList.remove('activa');
                setTimeout(() => {
                    seccion1.style.display = 'none';
                    seccion2.style.display = 'flex';
                    setTimeout(() => seccion2.classList.add('activa'), 50);
                }, 500); 
            });

            btnSobre.addEventListener('click', () => {
                seccion2.classList.remove('activa');
                setTimeout(() => {
                    seccion2.style.display = 'none';
                    seccion3.style.display = 'flex';
                    setTimeout(() => seccion3.classList.add('activa'), 50);
                }, 500);
            });

            // Función para volver al ramo
            btnVolver.addEventListener('click', () => {
                seccion3.classList.remove('activa');
                setTimeout(() => {
                    seccion3.style.display = 'none';
                    seccion2.style.display = 'flex';
                    setTimeout(() => seccion2.classList.add('activa'), 50);
                }, 500);
            });
        });