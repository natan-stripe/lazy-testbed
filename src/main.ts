async function main() {
    const $button1 = document.getElementById('button1');
    const $container = document.getElementById('container');

    $button1?.addEventListener('click', async () => {
        const { default: exp1 } = await import('./experience-1');
        await exp1($container);
    });
}

main().catch(err => {
    console.error(err);
});