const referans_data: string[] = [];

for (let i = 1; i < 180; i++) {
    if (i < 175) {
        referans_data.push(`/images/referans/ref (${i}).jpg`);
    } else if (i >= 176) {
        referans_data.push(`/images/referans/ref (${i}).webp`);
    }
}

export default referans_data;
