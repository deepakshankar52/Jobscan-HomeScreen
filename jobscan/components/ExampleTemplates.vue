<template>
    <div>
        <div class="first_div d-flex green ">
            <div class="example_templates">
                <a href="#template">
                    <img src="../assets/template_1.png" />
                </a>
                <!-- <a href="#home">Download</a> -->
            </div>
            <div class="example_templates">
                <a href="#template">
                    <img src="../assets/template_2.png" />
                </a>
            </div>
            <div class="example_templates">
                <a href="#template">
                    <img src="../assets/template_3.png" />
                </a>
            </div>
        </div>
    </div>
</template>

<style>

.first_div {
    width: 100vw;
    height: 150px;
    background-color: #006EDC;
    display: flex;
    justify-content: center;
    z-index: -1;
}

.example_templates {
    padding: 20px;
    margin: 0 30px;
    /* border: 2px solid red; */
    
}

.example_templates > a > img {
    box-shadow: 0 4px 8px 0 black;
    width: 288px;
    height: 374px;
    border-radius: 7px;
}
</style>