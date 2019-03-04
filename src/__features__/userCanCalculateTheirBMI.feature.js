describe('BMI Converter', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    beforeEach(async () => {
        await page.reload();
    });

    it('should display "BMI Converter" text on page', async () => {
        await expect(page).toMatch('BMI Converter');
    });

    describe('Metric method', async () => {
        beforeEach( async () => {
            await page.click('button[id="metricbutton"]')
            await page.type('input[name="weight"]', '95')
            await page.type('input[name="height"]', '186')
        })

        it('displays assesment', async () => {   
            await expect(page).toMatch('You are Overweight')
        })

        it('displays BMI value', async () => {   
            await expect(page).toMatch('BMI of 27.46')
        })
    })

    describe('Imperial method', async () => {
        beforeEach( async () => {
            await page.click('button[id="imperialbutton"]')
            await page.type('input[name="weight"]', '200')
            await page.type('input[name="height"]', '73')
        })

        it('displays assesment', async () => {   
            await expect(page).toMatch('You are Overweight')
        })

        it('displays BMI value', async () => {   
            await expect(page).toMatch('BMI of 26.38')
        })
    })
}); 