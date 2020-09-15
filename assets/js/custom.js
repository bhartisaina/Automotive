function suggest() {
    var limit = 6;
    var suggest_box = [
        'Comment Backlink',
        'Fourm Backlink',
        'Web 2.0 Backlink',
        'Image Backlink',
        'Video Backlink',
        'Audio Backlink',
        'Document Backlink',
        'Contextual Backlink',
        'Guest Post Backlink',
        'PBN Backlink',
        'Press Release Backlink',
        'Nandla Strategy',
        'SoftRank Strategy',
        'RankHack Strategy',
        'WikiPedia Backlink',
        'Old Domain Backlink',
        'Lost Backlink',
        'RSS Feed Backlink',
        'Govt Backlink',
        'Edu Backlink',
        'Scholarship Backlink',
        'Useful Paid Backlink',
        'Profile Backlink',
    ];
    document.getElementById('b-container').innerHTML = '';
    for (let i = 0; i < limit; i++) {
        var random_index = Math.floor(Math.random() * suggest_box.length);
        var node = document.getElementById('b-container');
        node.innerHTML += '<div class="col-4 mb-4"><div class="card"><div class="card-body"><h5 class="card-title m-0">' + suggest_box[random_index] + '</h5></div></div></div>';
        suggest_box[random_index] = null;
        
        var index = -1,
            arr_length = suggest_box ? suggest_box.length : 0,
            resIndex = -1,
            result = [];

        while (++index < arr_length) {
            var value = suggest_box[index];

            if (value) {
                result[++resIndex] = value;
            }
        }

        suggest_box = result;
    }

}
