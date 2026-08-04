export const HttpMethod = {
    Get: "GET",
    Post: "POST",
    Put: "PUT",
    Patch: "PATCH",
    Delete: "DELETE",
};

const ApiRoutes = {
    Auth: {
        GetTestimonials: {
            Endpoint: "/api/testimonials/get-testimonials",
            Method: HttpMethod.Get,
        },
    },
};

export default ApiRoutes;