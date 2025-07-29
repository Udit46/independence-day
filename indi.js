 <script>
        function shareOnWhatsApp() {
            const message = "Happy Independence Day! 🇮🇳 Celebrate the spirit of freedom with the legacy of Mahatma Gandhi and Bhagat Singh. Listen to Vande Mataram and join the pride! Jai Hind! #IndependenceDay\nShare this: https://your-page-url.com"; // Replace with actual hosted URL
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

        // Ensure audio autoplays reliably
        window.addEventListener('load', () => {
            const audio = document.getElementById('vandeMataram');
            audio.play().catch(error => {
                console.log('Autoplay prevented:', error);
                document.addEventListener('click', () => {
                    audio.play();
                }, { once: true });
            });
        });

        // Canvas border animation
        const canvas = document.getElementById('borderCanvas');
        const ctx = canvas.getContext('2d');
        const container = document.querySelector('.container');
        canvas.width = container.offsetWidth + 20;
        canvas.height = container.offsetHeight + 20;

        let offset = 0;
        const colors = ['#ff9933', '#ffffff', '#138808', '#000080']; // Saffron, White, Green, Navy Blue
        const dashLength = 20;
        const gapLength = 10;

        function drawBorder() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 10;
            ctx.setLineDash([dashLength, gapLength]);

            let currentOffset = offset % (dashLength + gapLength);
            ctx.setLineDash([dashLength, gapLength]);

            // Top border
            for (let i = 0; i < 4; i++) {
                ctx.beginPath();
                ctx.strokeStyle = colors[i % colors.length];
                ctx.moveTo(currentOffset, 0);
                ctx.lineTo(canvas.width, 0);
                ctx.stroke();
                currentOffset += dashLength + gapLength;
            }

            // Right border
            currentOffset = offset % (dashLength + gapLength);
            for (let i = 0; i < 4; i++) {
                ctx.beginPath();
                ctx.strokeStyle = colors[i % colors.length];
                ctx.moveTo(canvas.width, currentOffset);
                ctx.lineTo(canvas.width, canvas.height);
                ctx.stroke();
                currentOffset += dashLength + gapLength;
            }

            // Bottom border
            currentOffset = offset % (dashLength + gapLength);
            for (let i = 0; i < 4; i++) {
                ctx.beginPath();
                ctx.strokeStyle = colors[i % colors.length];
                ctx.moveTo(canvas.width - currentOffset, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.stroke();
                currentOffset += dashLength + gapLength;
            }

            // Left border
            currentOffset = offset % (dashLength + gapLength);
            for (let i = 0; i < 4; i++) {
                ctx.beginPath();
                ctx.strokeStyle = colors[i % colors.length];
                ctx.moveTo(0, canvas.height - currentOffset);
                ctx.lineTo(0, 0);
                ctx.stroke();
                currentOffset += dashLength + gapLength;
            }

            offset += 1;
            requestAnimationFrame(drawBorder);
        }

        drawBorder();
    </script>
