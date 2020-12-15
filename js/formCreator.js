$(document).ready(function () {
    
    // Self-Invoking Function to append Today's Date
    $("#currentDateLabel").append(function () {
        var todaysDatetoString;
        today = new Date();
        todaysDatetoString = today.toDateString();
        $("#currentDateLabel").append("<p>Today's Date: </p>").css("font-weight", "bold");
        $("#currentDate").append("<p>").html(todaysDatetoString);
    }($))

    console.log("document is ready");
    // Dynamic Select Controls Dependency
    $("#regulatoryAuthority").change(function () {

        $("#facilityType").find('option')
            .remove()
            .end();

        if ($("#regulatoryAuthority").val() == "") {
            console.log("Nothing has changed");
        }
        else if ($("#regulatoryAuthority").val() == "certified") {
            $("#facilityType").append('<option value="certified">Certified Family Care</option');
        } else {
            $("#facilityType").append('<option value="licensedFamily">Family Child Care Centers-DCF 250</option>')
                .append('<option value="groupCenter">Licensed Group Child Care Center-DCF 251</option>')
                .append('<option value="dayCamp">Licensed Day Camp</option>');
        }
    });

    $('input[name="rehabilitationAllowed"]').change(function () {
                if ($(this).is(':checked') && $(this).val() == "rehabilitationIsAllowed") {
            $('#rehabilitationIsAllowedText').modal('show');
        } else {
            console.log("No Rehabilition Text is shown");
        }
    });

    // Dynamically Add & Remove Text Box based on checkbox
    // #TODO need to append values and id's
        $('input[name="denialReason"]').click(function () {

            if ($(this).is(':checked')) {
                let textValue = ""
                var selectedValue = $(this);
                var label = $(this).next().html() + ":";
                console.log(navigator.userAgent);
               console.log("Label:" + label);
                console.log($(this).find("label"));
                textValue = selectedValue.val() + ": ";
         
                console.log("Text Value: " + textValue);
                console.log(textValue.toUpperCase());
   
     
        
                $('#denialBackground').append('<div id="denialGroup" class="form-group row"><div id="reasonLabel" class="col-md-2"> \
                <label for = "' + selectedValue.val() + '">' + label+ '</label></div><div class="col-md-8"><textarea id= "' + selectedValue.val() 
                + '"class="form-control" rows="4"></textarea></div></div>');
        }
        else {
$('#denialBackground').find('#denialGroup')
                .remove()
                .end();
            console.log("will I ever see this message?");

                }
    });

});

